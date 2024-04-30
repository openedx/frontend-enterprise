frontend-enterprise
###################

|Build Status| |Codecov|

``frontend-enterprise`` is a monorepo powered by Lerna containing several JavaScript packages that are independently published to NPM. These packages, listed below, contain shared enterprise-related UI components and utility functions.

- `@edx/frontend-enterprise-catalog-search </packages/catalog-search>`_
- `@edx/frontend-enterprise-logistration </packages/logistration>`_
- `@edx/frontend-enterprise-utils </packages/utils>`_
- `@edx/frontend-enterprise-hotjar </packages/hotjar>`_

Each of these packages is published to NPM and have their own README files. The packages can be found in the ``packages/*`` folder.

Getting started with development
*****

To get started with ``frontend-enterprise`` local development, clone the repo and run the following commands:

::

  npm run setup

The above command will install package dependencies using NPM workspaces, hoisting all packages to `node_modules` at the root of the repository for performance reasons (e.g., there will only be one copy of React). By using NPM workspaces, `npm install` knows that when importing a package that is part of this monorepo (e.g., `@edx/frontend-enterprise-utils`), it should look at the local package folder and creates symlinks accordingly.

Other useful commands for linting and testing may include:

::

  npm run lint
  npm run test

The above NPM scripts are run via NPM workspaces behind-the-scenes. By default, it will run the associated NPM command in each package in the monorepo. However, NPM workspaces does provide a mechanism to only run tests for a specific package, for example:

::

  npm run test -w @edx/frontend-enterprise-catalog-search

To clean your local monorepo of any installed ``node_modules`` and symlinked packages to start fresh, you may run:

::

  npm run clean

Installing new NPM modules in the workspace packages
-----

To install a new NPM module in all workspace packages, use the `--workspaces` argument, e.g.:

::

  npm install @openedx/paragon@latest --workspaces

To install a new NPM module in one or more specific workspace package(s), use the `--workspace` argument, e.g.:

::

  npm install -D @openedx/paragon@latest --workspace=@edx/frontend-enterprise-catalog-search


Installing local monorepo package(s) into an Open edX micro-frontend
-----

For any micro-frontend using `@openedx/frontend-build <https://github.com/openedx/frontend-build>` that consumes any packages from this monorepo may want to use a local copy of one or more packages during development rather than relying solely on the published NPM packages. To do this, you may modify your module.config.js file (create module.config.js if it does not already exist) to create Webpack aliases to your local checkout of the monorepo packages:

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

NPM workspaces helps with this by hoisting installed packages to the root `node_modules` folder where they will be accessible to any package in the monorepo to ensure there is only one copy used throughout. These dependencies are still noted in each individual package.json file as both a peer dependency and a dev dependency.

Writing a commit
-----

There is a precommit plugin (commitlint) which requires commit messages formatted using conventional commits. See https://github.com/conventional-changelog/commitlint#what-is-commitlint for more details. In general you need something like the following:

``type: subject``

where type must be one of ``[build, ci, docs, feat, fix, perf, refactor, revert, style, test]``

Note: only `fix`, `feat`, and `perf` will trigger a new NPM release, as this is the default behavior for semantic-release.

Versioning and releases
*****

This library has its version automatically updated by Lerna (i.e., ``lerna version``) using semantic-versioning under-the-hood when the release is published to npm. Lerna is configured to use independent versioning with conventional commits, as opposed to keeping all package versions in sync.

When a PR is merged, you must manually run ``lerna version`` to create a release commit (e.g., ``chore(release): publish new versions``). In this commit, Lerna increments the versions in the appropriate package.json files for any changed packages, creates Git tags, and updates the CHANGELOG file(s).

Once your contribution's PR is approved/merged:

#. Pull latest changes on your local checkout of ``master``, ensuring your merged commit is included. It's also recommended to ensure you have the latest Git tags (i.e., ``git fetch --tags``).
#. Checkout a new branch and execute ``npm run lerna:version``. Verify the recognized changed packages and their associated versions are correct. Once confirmed, Lerna will create a release commit and Git tags.
#. Open a new PR with the release commit; **do not push the Git tags yet**. Once approved, merge the release commit PR to ``master``.
#. After the release commit is merged, ensure your local checkout of ``master`` includes the release commit. Because the release commit was squashed before merging, the Git tags generated by Lerna are associated with an orphaned commit SHA. The Git tags will need to be re-created for the correct commit SHA on ``master``. The Git tags may be re-created for the latest commit by executing ``git tag -fa <tag-name>`` for each of the generated tags (e.g., ``git tag -fa @edx/frontend-enterprise-catalog-search@10.1.0``). Once you've re-created the Git tags for the correct commit SHA, you may verify them by executing ``git log --oneline --decorate`` to ensure the Git tags are associated with the latest commit on the ``master`` branch.
#. Once the Git tags are verified to be associated with the latest release commit on ``master``, push the Git tags to the remote repository by executing ``git push --tags``. Confirm the Git tags have been created by verifying the tags in GitHub.
#. To publish packages that had their versions incremented per the above steps, you must manually trigger the ``Publish from package.json`` Github Action workflow `found here <https://github.com/openedx/frontend-enterprise/actions/workflows/publish-from-package.yml>`_. It will publish any versions denoted in the package.json files that are not currently published on the NPM registry, publishing the incremented versions from the aforementioned release commit.
#. Finally, we also recommend creating a GitHub release for the recently pushed Git tags to document the releases.

Preview changed packages in CI with Github Actions
-----

As a convenience, a dry run of the ``lerna version`` command is run for each push to determine which packages in the monorepo will be published should a PR get merged.

.. |Build Status| image:: https://github.com/openedx/frontend-enterprise/actions/workflows/release.yml/badge.svg
   :target: https://github.com/openedx/frontend-enterprise/actions
.. |Codecov| image:: https://codecov.io/gh/edx/frontend-enterprise/branch/master/graph/badge.svg?token=lBHoe5P4Q3
   :target: https://codecov.io/gh/edx/frontend-enterprise
