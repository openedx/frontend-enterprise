################################
2. Lerna monorepo and separate NPM packages
################################

******
Status
******

Accepted

*******
Context
*******

``frontend-enterprise`` exists as a means to share enterprise-related functionality and UI components between several micro-frontends. This functionality includes the following domains:

* Utility functions to check whether a user's role is a valid Enterprise role, or fetch the user's linked enterprise customers.
* Course catalog search UI components.
* Logistration components to redirect users to enterprise-branded login or register pages.

Each of these domains have their own unique set of dependencies and requirements, yet are currently bundled into a `single NPM package <https://www.npmjs.com/package/@edx/frontend-enterprise>`_. This creates a scenario where there are dependencies (e.g., peer dependencies) that are noted in the package.json file that all consuming micro-frontends will get warnings about if those peer dependencies are missing. However, depending on the needs of the consuming micro-frontends, not all dependencies are relevant or needed to accomplish a task. For example, if edx/frontend-app-learning needs to fetch a learner's linked enterprise customers, it shouldn't need to throw warnings about missing dependencies related to enterprise catalog search as that is a different, unrelated domain.

The ``frontend-enterprise`` NPM package does support tree-shaking in that the published distrbution keeps modules as separate files rather than bundling all files into a single JavaScript file. While this tree-shaking support mitigates the issue where consuming micro-frontends don't pull in the unnecessary code, it doesn't solve the need around separating out dependency warnings. Related, NPM version 7 defaults to failing builds if there are unmet peer dependencies. If the organization were to upgrade to NPM version 7, ``frontend-enterprise`` would likely cause issues for non-enterprise micro-frontends due to these unmet peer dependencies.

Before further expanding the scope of what ``frontend-enterprise`` entails (i.e., adding UI components related to enterprise logistration), we should invest in splitting the domains/components of ``frontend-enterprise`` out into separate NPM packages to have better separation of concerns for consuming libraries and micro-frontend applications, reducing confusion and errors around dependencies and peer dependencies.

********
Decision
********

By separating the components of ``frontend-enterprise`` into different NPM packages, we are introducing some complexity in terms of the set up of this repository. Rather than split each domain into its own Github repository, we are taking the approach of keeping each domain in the same repository as a monorepo managed by `Lerna <https://lerna.js.org/>`_.

The 3 initial packages contained in the refactored Lerna monorepo are as follows:

1. ``@edx/frontend-enterprise-catalog-search``
2. ``@edx/frontend-enterprise-logistration``
3. ``@edx/frontend-enterprise-utils``

By splitting ``frontend-enterprise`` into separate NPM packages, only the dependencies relevant to each individual package are included in the package.json file. This solves the issue of requiring peer dependencies for consuming micro-frontends to install ``frontend-enterprise`` when those peer dependencies (e.g., react-instantsearch-dom) are not relevant. While the consuming libraries and micro-frontends were already importing only the necessary code thanks to tree shaking, we can now also create a proper separation of concerns for dependencies in package.json.

================================
Packages
================================

--------------------------------
``@edx/frontend-enterprise-catalog-search``
--------------------------------

This package exports UI components, React hooks, and actions functions related to Enterprise catalog search using `Algolia <algolia.com>`_ as a hosted search backend. This package will be used wherever it's
necessary to allow users to search the catalog(s) available to them through their Enterprise Customer.

--------------------------------
``@edx/frontend-enterprise-logistration``
--------------------------------

This package exports a UI component related to logistration for Enterprise users. This package will be helpful for Enterprise micro-frontends to share logic related to redirecting enterprise users to the logistration page branded with their Enterprise Customer's logo and additional messaging.

--------------------------------
``@edx/frontend-enterprise-utils``
--------------------------------

This package exports useful React hooks, utility functions, and constants for use in other libraries and micro-frontends, including checking whether an authenticated user is an enterprise user based on their JWT role(s), or fetching a user's available Enterprise learner portal links.

================================
Managing package dependencies
================================

Each package in the monorepo contains its own package.json file and unique set of dependencies depending on their needs. However, issues may arise when importing conflicting versions of external packages (e.g., React) in multiple monorepo packages. This is because some dependencies only properly work when there is a single copy of the dependency to ensure the same version is used throughout an application. For example, ``react`` and ``react-dom`` are common offenders here as there can only be one copy of React used at any given time. If a library/app attempts to use more than one copy or differening versions of React, there will be unintended behavior and warnings.

To get around this issue of common/shared dependencies, we can rely on how NPM finds installed packages. If a package does not exist in ``node_modules`` for an individual package, NPM will look in ``node_modules`` further up the directory tree until it finds the package, or gets to the root of the repository. 

By installing these common dependencies at the root package.json file, they will be accessible to any package in the monorepo to ensure there is only one copy of them used throughout. These dependencies are still noted in each individual package.json file as a peer dependency but not as a dev dependency since they are already installed in ``node_modules`` at the root of the repository.

As such, we should pay extra attention to managing dependencies in each packages, making informed decisions about whether a dependency should be included in an individual package's package.json file or the package.json file at the root of the repository.

================================
Running CI for branches and pull requests
================================

When a branch is pushed or a pull request is created on Github, CI will continue to run tests, linting, and other necessary build steps to ensure changes did not cause regressions. The difference now is that we rely on Lerna to run commands across all packages that have changed since the last release. This will ensure when a change is made to a package, the CI will be sure to run any associated tests for that specific package, including any of its dependencies and dependents across the monorepo. Output from each command Lerna runs concurrently across all packages are streamed in each Github Action step.

================================
NPM releases with Lerna
================================

Publishing packages to NPM remains a job of Github Actions, however, releases will no longer happen using ``semantic-release`` directly. Instead, we will rely on the ``lerna publish`` command to determine which packages have changed since the last merged commit and release, and only publish those. 

Lerna is configured to use independent versioning with conventional commits, as opposed to keeping all package versions in sync. This will allow us to publish packages independently of each other, rather than in lock-step like some JS monorepos do (e.g., Babel, React). The benefit of independent versioning is that consuming applications won't get erroneous upgrades when code unrelated to their use case is updated in the monorepo. For example, say the ``edx/frontend-app-learning`` micro-frontend consumes ``@edx/frontend-enterprise-utils``. Without independent versioning, if we released a new version of ``@edx/frontend-enterprise-catalog-search``, then ``edx/frontend-app-learning`` would have an upgrade available when nothing about the package changed.

The image that follows is a diagram outlining the NPM publishing process. When a PR is merged, Github Actions will run the necessary Lerna commands to run all linting, tests, and builds for each package that changed since the last release, including dependencies and dependents. Each package, independently released, follows semantic versioning to determine the package version, creates and pushes Git tags, and then publishes to NPM.

.. image:: https://user-images.githubusercontent.com/2828721/116780392-82947000-aa4a-11eb-82ce-819604de935f.png

************
Consequences
************

* The existing ``frontend-enterprise`` NPM package will be deprecrated in favor of the 3 new NPM packages outlined above. We will need to upgrade all uses of ``frontend-enterprise`` to import from the relevant individual NPM packages instead.
* Common or shared dependencies will be accessible to all packages in the monorepo, regardless of whether they are explicitly specified in a package's package.json file. Despite this, we have tooling in place through ESlint's ``eslint-plugin-import`` to throw a linting error when attempting to import packages that are not explicitly defined in package.json.
* The repository's CI/CD strategy to publish NPM packages changes from using ``semantic-release`` directly to using a ``lerna publish`` command, which is configured to follow conventional commits.
* Limited organizational knowledge around monorepos and Lerna.

**********
References
**********

* https://lerna.js.org/
* https://github.com/lerna/lerna
