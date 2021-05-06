frontend-enterprise
#####

|Build Status| |Codecov|

``frontend-enterprise`` is a monorepo powered by Lerna containing several JavaScript packages that are independently published to NPM. These packages, listed below, contain shared enterprise-related UI components and utility functions.

- `@edx/frontend-enterprise-catalog-search </packages/catalog-search>`_
- `@edx/frontend-enterprise-logistration </packages/logistration>`_
- `@edx/frontend-enterprise-utils </packages/utils>`_

Each of these packages is published to NPM and have their own README files. The packages can be found in the ``packages/*`` folder.

Getting started with development
*****

To get started with ``frontend-enterprise`` local development, clone the repo and run the following commands:

::

  npm run setup
  npm run dev

The above commands will install package dependencies, symlinking local packages rather than installing from NPM directly. However, since (most of) the packages in this monorepo contain a build step for Babel transpilation, it necessary to watch changes in the ``src`` directories of each package to re-run the relevant build script(s) as needed (``npm run dev``).

Each package is configured to only publish the contents of the generated ``dist`` directory to NPM; this behavior gets replicated in the local symlinking of packages as well, which is why it is necessary to watch the source files for changes and re-build the ``dist`` directory when they do change. This ensures the symlinked packages will always contain the correct packages. It is recommended to run ``npm run dev`` in a separate terminal tab or window so you may run other commands as needed while source files are still being watched/transpiled.

Other useful commands for linting and testing may include:

::

  npm run lint
  npm run test

The above NPM scripts are running Lerna commands behind-the-scenes. By default, it will run the associated NPM command in each package in the monorepo. However, Lerna provides a mechanism to only run tests for a specific package(s), for example:

::

  lerna run test --scope=@edx/frontend-enterprise-catalog-search

To clean your local monorepo of any installed ``node_modules`` and symlinked packages to start fresh, you may run:

::

  npm run clean

See https://github.com/lerna/lerna for full documentation of Lerna commands.

Installing local monorepo package(s) from an edX micro-frontend
-----

For any micro-frontend using `@edx/frontend-build <https://github.com/edx/frontend-build>` that consumes any packages from this monorepo may want to use a local copy of one or more packages during development rather than relying solely on the published NPM packages. To do this, you may modify your module.config.js file to create Webpack aliases to your local checkout of the monorepo packages:

::

  module.exports = {
    localModules: [
      {
        moduleName: '@edx/frontend-enterprise-catalog-search',
        dir: '../frontend-enterprise/packages/catalog-search',
        dist: 'src',
      },
    ],
  };

By configuring the module.config.js as such, when running ``npm start``, the consuming micro-frontend will instead import from the ``../frontend-enterprise/packages/catalog-search/src`` rather than the published ``@edx/frontend-enterprise-catalog-search`` NPM package. This allows contributors to test any local changes to packages in this monorepo inside of consuming applications.

Note that the ``dist`` configuration option in the above example is set to ``src`` vs. ``dist``. By using ``src`` here, any changes made to package source files will be picked up and hot reloaded by the consuming micro-frontend.

Conversely, if this option is ``dist``, it expects a ``dist`` directory to exist in the package. To ensure these ``dist`` directories exist, you may run ``npm run dev`` in another terminal window/tab to watch for changes in any package source files and re-transpile them into ``dist`` such that the consuming micro-frontend will always be using the build with the latest source file changes.

Considerations for updating existing packages or adding a new package
*****

When making updates in this monorepo, be sure to consider whether your changes should belong in an existing NPM package or a brand new NPM package. The purpose of the monorepo is to keep clear separation of concerns between packages so that each package owns a smaller domain of functionality or components to avoid package bloat.

However, we do run the risk of packages becoming a "catch-all" package (e.g., ``@edx/frontend-enterprise-utils``) for anything that doesn't fit in existing packages. Contributors to the monorepo should consider whether any new functionality is related to the domains established in existing packages.

Managing package dependencies
*****

Each package in the monorepo contains its own package.json file and unique set of dependencies depending on their needs. However, issues may arise when importing conflicting versions of external packages (e.g., React) in multiple monorepo packages. This is because some dependencies only properly work when there is a single copy of the dependency to ensure the same version is used throughout an application. For example, ``react`` and ``react-dom`` are common offenders here as there can only be one copy of React used at any given time. If a library/app attempts to use more than one copy or differening versions of React, there will be unintended behavior and warnings.

To get around this issue of common/shared dependencies, we can rely on how NPM finds installed packages. If a package does not exist in ``node_modules`` for an individual package, NPM will look in ``node_modules`` further up the directory tree until it finds the package, or gets to the root of the repository. 

By installing these common dependencies at the root package.json file, they will be accessible to any package in the monorepo to ensure there is only one copy of them used throughout. These dependencies are still noted in each individual package.json file as a peer dependency but not as a dev dependency since they are already installed in ``node_modules`` at the root of the repository.

As such, we should pay extra attention to managing dependencies in each packages, making informed decisions about whether a dependency should be included in an individual package's package.json file or the package.json file at the root of the repository.

Writing a commit
-----

There is a precommit plugin (commitlint) which requires commit messages formatted using conventional commits. See https://github.com/conventional-changelog/commitlint#what-is-commitlint for more details. In general you need something like the following:

``type: subject``

where type must be one of ``[build, ci, docs, feat, fix, perf, refactor, revert, style, test]``

Versioning and releases
*****

This library has its version automatically updated by Lerna (i.e., ``lerna publish``) using semantic-versioning under-the-hood when the release is published to npm.

Lerna is configured to use independent versioning with conventional commits, as opposed to keeping all package versions in sync.

Preview changed packages in CI with Github Actions
-----

As a convenience, the ``lerna changed`` command is run for each push to determine which packages in the monorepo will be published should a PR get merged.

.. |Build Status| image:: https://github.com/edx/frontend-enterprise/actions/workflows/release.yml/badge.svg
   :target: https://github.com/edx/frontend-enterprise/actions
.. |Codecov| image:: https://codecov.io/gh/edx/frontend-enterprise/branch/master/graph/badge.svg?token=lBHoe5P4Q3
   :target: https://codecov.io/gh/edx/frontend-enterprise
