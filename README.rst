frontend-enterprise
=============

|Build Status| |Coveralls| |npm_version| |npm_downloads| |license| |semantic-release|

frontend-enterprise contains utility functions for supporting enterprise features.

Dependency notes
-----

v6 and higher of query-string will fail the es5 check
eslint-plugin-import needed at least 2.22.1 to avoid failures with an infinity symbol (see https://stackoverflow.com/questions/64790681/eslint-error-configuration-for-rule-import-no-cycle-is-invalid)

Usage
-----

To install frontend-enterprise into your project:

::

   npm i --save @edx/frontend-enterprise

.. |Build Status| image:: https://api.travis-ci.org/edx/frontend-enterprise.svg?branch=master
   :target: https://travis-ci.org/edx/frontend-enterprise
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
