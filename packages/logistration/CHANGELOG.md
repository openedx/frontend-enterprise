# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 3.0.0 (2023-04-24)


### ⚠ BREAKING CHANGES

* The Open edX platform is collectively moving towards Node 16. By doing so in this repository, we can now use NPM workspaces in place of Lerna in many places. Lerna is still used for publishing to NPM, updating CHANGELOGs and package.json files upon released. But NPM workspace commands can now be used instead of Lerna commands for the developer experience, which is more performant, easier to reason about, and natively supported by NPM.
* refactor to split ui components into separate packages using Lerna

### Features

* Add .npmrc file to more .gitignore files ([#303](https://github.com/openedx/frontend-enterprise/issues/303)) ([d890c21](https://github.com/openedx/frontend-enterprise/commit/d890c212c3f8c5ec81e6dee63f68029ad0b00552))
* add hotjar library ([#264](https://github.com/openedx/frontend-enterprise/issues/264)) ([f132ce1](https://github.com/openedx/frontend-enterprise/commit/f132ce1716bb64714a8c368a80f673d1e9ef12fc))
* support enterprise customer invite key in LoginRedirect ([#192](https://github.com/openedx/frontend-enterprise/issues/192)) ([9b8a200](https://github.com/openedx/frontend-enterprise/commit/9b8a200633d5fc665ed9faf79d10f43cb7a9386a))


### Bug Fixes

* add loadingDisplay prop to LoginRedirect ([#121](https://github.com/openedx/frontend-enterprise/issues/121)) ([5006845](https://github.com/openedx/frontend-enterprise/commit/5006845235135787f17c7dd66bd9b5e86254efd3))
* add temp export to test publish ([10eb73d](https://github.com/openedx/frontend-enterprise/commit/10eb73d2a72d485e4a9cc57bcc6c17e59a20d67f))
* Bump all versions one final time I hope.... ([#297](https://github.com/openedx/frontend-enterprise/issues/297)) ([3452d81](https://github.com/openedx/frontend-enterprise/commit/3452d810bad4b7292ce342ac96bec500809b532d))
* downgrade query-string to pin to ES5 compatible version ([#129](https://github.com/openedx/frontend-enterprise/issues/129)) ([52688ac](https://github.com/openedx/frontend-enterprise/commit/52688acc9c4113f9bed2423434e7b2c7d88221f8))
* lerna release config ([69119d3](https://github.com/openedx/frontend-enterprise/commit/69119d31652e78d87b6b8b3b4ab3834b0e3e6f01))
* manully bump versions after failed automation run ([#301](https://github.com/openedx/frontend-enterprise/issues/301)) ([f1e8616](https://github.com/openedx/frontend-enterprise/commit/f1e8616996c46ffda1c7596be6fc323136ac34c2))
* remove query-string dependency ([#204](https://github.com/openedx/frontend-enterprise/issues/204)) ([b027561](https://github.com/openedx/frontend-enterprise/commit/b0275613e1eaa8ddc8bf233a906ddfb6becc858f))
* run lerna commands for all packages regardless of whether they changed in release.yml ([#109](https://github.com/openedx/frontend-enterprise/issues/109)) ([608b1fb](https://github.com/openedx/frontend-enterprise/commit/608b1fb4c3b5343f05ef994436dbbd2418668e17))
* split role name from context in JWT user roles ([#122](https://github.com/openedx/frontend-enterprise/issues/122)) ([348bc6c](https://github.com/openedx/frontend-enterprise/commit/348bc6c5c912d2c92ccee5869d49890528e6e51a))
* temporary export and lerna release config update ([#127](https://github.com/openedx/frontend-enterprise/issues/127)) ([9fe958a](https://github.com/openedx/frontend-enterprise/commit/9fe958a3cab30a8182e8e202e76d7fda940cd99e))
* update devDependencies in `utils` and `logistration`; add more docs to README ([#260](https://github.com/openedx/frontend-enterprise/issues/260)) ([db5204d](https://github.com/openedx/frontend-enterprise/commit/db5204dd417a57d4e20a66d5cc1fdfd5fee298cb))
* update publishing behavior and add additional docs ([#104](https://github.com/openedx/frontend-enterprise/issues/104)) ([525c430](https://github.com/openedx/frontend-enterprise/commit/525c430d5027e4514a27edccfed3d6ed4ddae091))
* Use media query to resize for mobile in SearchFilters ([#259](https://github.com/openedx/frontend-enterprise/issues/259)) ([6780f94](https://github.com/openedx/frontend-enterprise/commit/6780f94058badbf82b909430db209574698dd596))
* use shared browserslist configuration ([#179](https://github.com/openedx/frontend-enterprise/issues/179)) ([6ffebe5](https://github.com/openedx/frontend-enterprise/commit/6ffebe5ba490567c691eac978125eee530707556))


### Code Refactoring

* separate components into npm packages in monorepo; add logistration-redirect ([#97](https://github.com/openedx/frontend-enterprise/issues/97)) ([3e2a3ac](https://github.com/openedx/frontend-enterprise/commit/3e2a3acf327211ed82415e8052d008bd1fdd2e33))


* Node 16 upgrade and peer dependency cleanup (#250) ([d4e3caf](https://github.com/openedx/frontend-enterprise/commit/d4e3caf7e15a626f1c5e4b4d27f5e09c6f412120)), closes [#250](https://github.com/openedx/frontend-enterprise/issues/250)



## [2.4.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@2.1.1...@edx/frontend-enterprise-logistration@2.4.0) (2023-04-24)


### Features

* Add .npmrc file to more .gitignore files ([#303](https://github.com/openedx/frontend-enterprise/issues/303)) ([d890c21](https://github.com/openedx/frontend-enterprise/commit/d890c212c3f8c5ec81e6dee63f68029ad0b00552))


### Bug Fixes

* Bump all versions one final time I hope.... ([#297](https://github.com/openedx/frontend-enterprise/issues/297)) ([3452d81](https://github.com/openedx/frontend-enterprise/commit/3452d810bad4b7292ce342ac96bec500809b532d))
* manully bump versions after failed automation run ([#301](https://github.com/openedx/frontend-enterprise/issues/301)) ([f1e8616](https://github.com/openedx/frontend-enterprise/commit/f1e8616996c46ffda1c7596be6fc323136ac34c2))



## 2.3.0 (2023-04-24)


### Features

* Add .npmrc file to more .gitignore files ([#303](https://github.com/openedx/frontend-enterprise/issues/303)) ([d890c21](https://github.com/openedx/frontend-enterprise/commit/d890c212c3f8c5ec81e6dee63f68029ad0b00552))


### Bug Fixes

* Bump all versions one final time I hope.... ([#297](https://github.com/openedx/frontend-enterprise/issues/297)) ([3452d81](https://github.com/openedx/frontend-enterprise/commit/3452d810bad4b7292ce342ac96bec500809b532d))
* manully bump versions after failed automation run ([#301](https://github.com/openedx/frontend-enterprise/issues/301)) ([f1e8616](https://github.com/openedx/frontend-enterprise/commit/f1e8616996c46ffda1c7596be6fc323136ac34c2))



## 2.2.0 (2023-04-24)


### Features

* Add .npmrc file to more .gitignore files ([#303](https://github.com/openedx/frontend-enterprise/issues/303)) ([d890c21](https://github.com/openedx/frontend-enterprise/commit/d890c212c3f8c5ec81e6dee63f68029ad0b00552))


### Bug Fixes

* Bump all versions one final time I hope.... ([#297](https://github.com/openedx/frontend-enterprise/issues/297)) ([3452d81](https://github.com/openedx/frontend-enterprise/commit/3452d810bad4b7292ce342ac96bec500809b532d))
* manully bump versions after failed automation run ([#301](https://github.com/openedx/frontend-enterprise/issues/301)) ([f1e8616](https://github.com/openedx/frontend-enterprise/commit/f1e8616996c46ffda1c7596be6fc323136ac34c2))



### 2.1.5 (2023-02-17)


### Bug Fixes

* Bump all versions one final time I hope.... ([#297](https://github.com/edx/frontend-enterprise/issues/297)) ([3452d81](https://github.com/edx/frontend-enterprise/commit/3452d810bad4b7292ce342ac96bec500809b532d))



### 2.1.3 (2023-02-16)

**Note:** Version bump only for package @edx/frontend-enterprise-logistration





### 2.1.1 (2022-08-24)

**Note:** Version bump only for package @edx/frontend-enterprise-logistration





## [2.1.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@2.0.4...@edx/frontend-enterprise-logistration@2.1.0) (2022-06-22)


### Features

* add hotjar library ([#264](https://github.com/openedx/frontend-enterprise/issues/264)) ([f132ce1](https://github.com/openedx/frontend-enterprise/commit/f132ce1716bb64714a8c368a80f673d1e9ef12fc))



### [2.0.4](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@2.0.3...@edx/frontend-enterprise-logistration@2.0.4) (2022-06-17)

**Note:** Version bump only for package @edx/frontend-enterprise-logistration





### [2.0.3](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@2.0.2...@edx/frontend-enterprise-logistration@2.0.3) (2022-06-02)


### Bug Fixes

* update devDependencies in `utils` and `logistration`; add more docs to README ([#260](https://github.com/openedx/frontend-enterprise/issues/260)) ([db5204d](https://github.com/openedx/frontend-enterprise/commit/db5204dd417a57d4e20a66d5cc1fdfd5fee298cb))



### 2.0.2 (2022-06-02)


### Bug Fixes

* Use media query to resize for mobile in SearchFilters ([#259](https://github.com/openedx/frontend-enterprise/issues/259)) ([6780f94](https://github.com/openedx/frontend-enterprise/commit/6780f94058badbf82b909430db209574698dd596))



### [2.0.1](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@2.0.0...@edx/frontend-enterprise-logistration@2.0.1) (2022-04-15)

**Note:** Version bump only for package @edx/frontend-enterprise-logistration





## 2.0.0 (2022-04-14)


### ⚠ BREAKING CHANGES

* The Open edX platform is collectively moving towards Node 16. By doing so in this repository, we can now use NPM workspaces in place of Lerna in many places. Lerna is still used for publishing to NPM, updating CHANGELOGs and package.json files upon released. But NPM workspace commands can now be used instead of Lerna commands for the developer experience, which is more performant, easier to reason about, and natively supported by NPM.

* Node 16 upgrade and peer dependency cleanup (#250) ([d4e3caf](https://github.com/openedx/frontend-enterprise/commit/d4e3caf7e15a626f1c5e4b4d27f5e09c6f412120)), closes [#250](https://github.com/openedx/frontend-enterprise/issues/250)



### [1.1.2](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@1.1.1...@edx/frontend-enterprise-logistration@1.1.2) (2022-01-24)

**Note:** Version bump only for package @edx/frontend-enterprise-logistration





### 1.1.1 (2022-01-24)


### Bug Fixes

* remove query-string dependency ([#204](https://github.com/openedx/frontend-enterprise/issues/204)) ([b027561](https://github.com/openedx/frontend-enterprise/commit/b0275613e1eaa8ddc8bf233a906ddfb6becc858f))



## 1.1.0 (2021-12-09)


### Features

* support enterprise customer invite key in LoginRedirect ([#192](https://github.com/openedx/frontend-enterprise/issues/192)) ([9b8a200](https://github.com/openedx/frontend-enterprise/commit/9b8a200633d5fc665ed9faf79d10f43cb7a9386a))



### 1.0.2 (2021-11-03)


### Bug Fixes

* use shared browserslist configuration ([#179](https://github.com/openedx/frontend-enterprise/issues/179)) ([6ffebe5](https://github.com/openedx/frontend-enterprise/commit/6ffebe5ba490567c691eac978125eee530707556))



### 1.0.1 (2021-10-14)

**Note:** Version bump only for package @edx/frontend-enterprise-logistration





# 1.0.0 (2021-08-17)

**Note:** Version bump only for package @edx/frontend-enterprise-logistration





## [0.1.11](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@0.1.10...@edx/frontend-enterprise-logistration@0.1.11) (2021-05-20)


### Bug Fixes

* downgrade query-string to pin to ES5 compatible version ([#129](https://github.com/openedx/frontend-enterprise/issues/129)) ([52688ac](https://github.com/openedx/frontend-enterprise/commit/52688acc9c4113f9bed2423434e7b2c7d88221f8))





## [0.1.10](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@0.1.9...@edx/frontend-enterprise-logistration@0.1.10) (2021-05-20)


### Bug Fixes

* split role name from context in JWT user roles ([#122](https://github.com/openedx/frontend-enterprise/issues/122)) ([348bc6c](https://github.com/openedx/frontend-enterprise/commit/348bc6c5c912d2c92ccee5869d49890528e6e51a))





## [0.1.9](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@0.1.8...@edx/frontend-enterprise-logistration@0.1.9) (2021-05-20)


### Bug Fixes

* temporary export and lerna release config update ([#127](https://github.com/openedx/frontend-enterprise/issues/127)) ([9fe958a](https://github.com/openedx/frontend-enterprise/commit/9fe958a3cab30a8182e8e202e76d7fda940cd99e))





## [0.1.8](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@0.1.7...@edx/frontend-enterprise-logistration@0.1.8) (2021-05-20)


### Bug Fixes

* lerna release config ([69119d3](https://github.com/openedx/frontend-enterprise/commit/69119d31652e78d87b6b8b3b4ab3834b0e3e6f01))





## [0.1.7](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@0.1.6...@edx/frontend-enterprise-logistration@0.1.7) (2021-05-20)


### Bug Fixes

* add temp export to test publish ([10eb73d](https://github.com/openedx/frontend-enterprise/commit/10eb73d2a72d485e4a9cc57bcc6c17e59a20d67f))





## [0.1.6](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@0.1.5...@edx/frontend-enterprise-logistration@0.1.6) (2021-05-14)


### Bug Fixes

* add loadingDisplay prop to LoginRedirect ([#121](https://github.com/openedx/frontend-enterprise/issues/121)) ([5006845](https://github.com/openedx/frontend-enterprise/commit/5006845235135787f17c7dd66bd9b5e86254efd3))





## [0.1.5](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@0.1.3...@edx/frontend-enterprise-logistration@0.1.5) (2021-05-10)


### Bug Fixes

* run lerna commands for all packages regardless of whether they changed in release.yml ([#109](https://github.com/openedx/frontend-enterprise/issues/109)) ([608b1fb](https://github.com/openedx/frontend-enterprise/commit/608b1fb4c3b5343f05ef994436dbbd2418668e17))
* update publishing behavior and add additional docs ([#104](https://github.com/openedx/frontend-enterprise/issues/104)) ([525c430](https://github.com/openedx/frontend-enterprise/commit/525c430d5027e4514a27edccfed3d6ed4ddae091))





## [0.1.4](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@0.1.3...@edx/frontend-enterprise-logistration@0.1.4) (2021-05-10)


### Bug Fixes

* run lerna commands for all packages regardless of whether they changed in release.yml ([#109](https://github.com/openedx/frontend-enterprise/issues/109)) ([608b1fb](https://github.com/openedx/frontend-enterprise/commit/608b1fb4c3b5343f05ef994436dbbd2418668e17))
* update publishing behavior and add additional docs ([#104](https://github.com/openedx/frontend-enterprise/issues/104)) ([525c430](https://github.com/openedx/frontend-enterprise/commit/525c430d5027e4514a27edccfed3d6ed4ddae091))





## [0.1.3](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@0.1.2...@edx/frontend-enterprise-logistration@0.1.3) (2021-05-08)

**Note:** Version bump only for package @edx/frontend-enterprise-logistration





## [0.1.2](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@0.1.1...@edx/frontend-enterprise-logistration@0.1.2) (2021-05-07)

**Note:** Version bump only for package @edx/frontend-enterprise-logistration





## [0.1.1](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-logistration@0.1.0...@edx/frontend-enterprise-logistration@0.1.1) (2021-05-07)

**Note:** Version bump only for package @edx/frontend-enterprise-logistration





# 0.1.0 (2021-05-06)


* refactor!: separate components into npm packages in monorepo; add logistration-redirect (#97) ([3e2a3ac](https://github.com/openedx/frontend-enterprise/commit/3e2a3acf327211ed82415e8052d008bd1fdd2e33)), closes [#97](https://github.com/openedx/frontend-enterprise/issues/97)


### BREAKING CHANGES

* refactor to split ui components into separate packages using Lerna
