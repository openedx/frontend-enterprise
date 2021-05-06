frontend-enterprise
=============

|Build Status| |Codecov|

``frontend-enterprise`` is a monorepo powered by Lerna containing several JavaScript packages that are independently published to NPM. These packages, listed below, contain shared enterprise-related UI components and utility functions.

- ``@edx/frontend-enterprise-catalog-search``
- ``@edx/frontend-enterprise-logistration``
- ``@edx/frontend-enterprise-utils``

Each of these packages is published to NPM and have their own README files. The packages can be found in the ``packages/*`` folder.

Getting started with development
-----

To get started with ``frontend-enterprise`` development, clone the repo and run the following commands to create production builds for each package:

::

  npm install
  npm run bootstrap
  npm run lint
  npm run test
  npm run build

These NPM scripts are running Lerna commands behind the scenes to run only the scripts for any packages that have changed since the last release. To run NPM scripts for a single package in the monorepo, you may run Lerna commands directly. For example, to only run tests for a specific package:

::

  lerna run test --scope=@edx/frontend-enterprise-catalog-search

See https://github.com/lerna/lerna for full documentation of Lerna commands.

Dependency notes
-----

* ``eslint-plugin-import`` needed at least 2.22.1 to avoid failures with an infinity symbol (see https://stackoverflow.com/questions/64790681/eslint-error-configuration-for-rule-import-no-cycle-is-invalid). This can be removed from here once frontend-build PR is merged: https://github.com/edx/frontend-build/pull/137

There is a precommit plugin (commitlint) which requires commit messages formatted in a particular way. See https://github.com/conventional-changelog/commitlint#what-is-commitlint for more details.
In general you need something like the following:

```
type: subject
```
type must be one of [build, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]

Versioning and Releases
-----
This library has its version automatically updated by Lerna using semantic-versioning under-the-hood when the release is published to npm. The source code package.json file versions should 0.0.0.

Preview changed packages in CI with Github Actions
*****

As a convenience, the ``lerna changed`` command is run for each push to determine which packages in the monorepo will be published should a PR get merged.

.. |Build Status| image:: https://github.com/edx/frontend-enterprise/actions/workflows/release.yml/badge.svg
   :target: https://github.com/edx/frontend-enterprise/actions
.. |Codecov| image:: https://codecov.io/gh/edx/frontend-enterprise/branch/master/graph/badge.svg?token=lBHoe5P4Q3
   :target: https://codecov.io/gh/edx/frontend-enterprise
