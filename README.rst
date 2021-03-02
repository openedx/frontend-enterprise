frontend-enterprise
=============

|Build Status| |Coveralls| |npm_version| |npm_downloads| |license| |semantic-release|

frontend-enterprise contains utility functions for supporting enterprise features.

Dependency notes
-----

* v6 and higher of query-string will fail the es5 check
* eslint-plugin-import needed at least 2.22.1 to avoid failures with an infinity symbol (see https://stackoverflow.com/questions/64790681/eslint-error-configuration-for-rule-import-no-cycle-is-invalid). This can be removed from here once frontend-build PR is merged: https://github.com/edx/frontend-build/pull/137

There is a precommit plugin (commitlint) which requires commit messages formatted in a particular way
See: https://github.com/conventional-changelog/commitlint#what-is-commitlint.
In general you need something like

```
type: subject
```
type must be one of [build, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]

Versioning and Releases
-----
This library has its version automatically updated by semantic-versioning when the release is published to npm. The source code package.json file should remain at "1.0.0-semantically-released".  The below Usage instructions will install the latest version from npm. Please see the repository Releases for earlier package versions. 

Preview next release version from Pull Requests
*****

As a convenience, the "node_js CI / build (push)" check on Pull Requests includes a step to analyze the commit(s) and outputs a preview of what version semantic-release will publish if a PR gets merged. This is done using the "--dry-run" option for the semantic-release CLI, which will skip the publish/release steps. Look for a message in this CI step along the lines of "The next release version is <NEXT_RELEASE_VERSION>".

Usage
-----

To install frontend-enterprise into your project:

::

   npm i --save @edx/frontend-enterprise

.. |Build Status| image:: https://api.travis-ci.com/edx/frontend-enterprise.svg?branch=master
   :target: https://travis-ci.com/edx/frontend-enterprise
.. |Coveralls| image:: https://img.shields.io/coveralls/edx/frontend-enterprise.svg?branch=master
   :target: https://coveralls.io/github/edx/frontend-enterprise
.. |npm_version| image:: https://img.shields.io/npm/v/@edx/frontend-enterprise.svg
   :target: @edx/frontend-enterprise
.. |npm_downloads| image:: https://img.shields.io/npm/dt/@edx/frontend-enterprise.svg
   :target: @edx/frontend-enterprise
.. |license| image:: https://img.shields.io/npm/l/@edx/frontend-enterprise.svg
   :target: @edx/frontend-enterprise
.. |semantic-release| image:: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
   :target: https://github.com/semantic-release/semantic-release
