# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [2.0.3](https://github.com/edx/frontend-enterprise/compare/@edx/frontend-enterprise-utils@2.0.2...@edx/frontend-enterprise-utils@2.0.3) (2022-06-02)


### Bug Fixes

* update devDependencies in `utils` and `logistration`; add more docs to README ([#260](https://github.com/edx/frontend-enterprise/issues/260)) ([db5204d](https://github.com/edx/frontend-enterprise/commit/db5204dd417a57d4e20a66d5cc1fdfd5fee298cb))



### 2.0.2 (2022-06-02)


### Bug Fixes

* Use media query to resize for mobile in SearchFilters ([#259](https://github.com/edx/frontend-enterprise/issues/259)) ([6780f94](https://github.com/edx/frontend-enterprise/commit/6780f94058badbf82b909430db209574698dd596))



### [2.0.1](https://github.com/edx/frontend-enterprise/compare/@edx/frontend-enterprise-utils@2.0.0...@edx/frontend-enterprise-utils@2.0.1) (2022-04-15)


### Bug Fixes

* updated enterprise role determination with multiple enterprise support ([#253](https://github.com/edx/frontend-enterprise/issues/253)) ([87f5e07](https://github.com/edx/frontend-enterprise/commit/87f5e072aa5194a507a8b2fdb15f21b69e82612c))



## 2.0.0 (2022-04-14)


### ⚠ BREAKING CHANGES

* The Open edX platform is collectively moving towards Node 16. By doing so in this repository, we can now use NPM workspaces in place of Lerna in many places. Lerna is still used for publishing to NPM, updating CHANGELOGs and package.json files upon released. But NPM workspace commands can now be used instead of Lerna commands for the developer experience, which is more performant, easier to reason about, and natively supported by NPM.

* Node 16 upgrade and peer dependency cleanup (#250) ([d4e3caf](https://github.com/edx/frontend-enterprise/commit/d4e3caf7e15a626f1c5e4b4d27f5e09c6f412120)), closes [#250](https://github.com/edx/frontend-enterprise/issues/250)



## 1.3.0 (2022-01-24)


### Features

* add hasFeatureFlagEnabled util function ([#209](https://github.com/edx/frontend-enterprise/issues/209)) ([9dca2e4](https://github.com/edx/frontend-enterprise/commit/9dca2e41ea0b043d17356b4accb5e40c582a5b26))



## 1.2.0 (2021-12-09)


### Features

* support enterprise customer invite key in LoginRedirect ([#192](https://github.com/edx/frontend-enterprise/issues/192)) ([9b8a200](https://github.com/edx/frontend-enterprise/commit/9b8a200633d5fc665ed9faf79d10f43cb7a9386a))



### 1.1.1 (2021-11-03)


### Bug Fixes

* use shared browserslist configuration ([#179](https://github.com/edx/frontend-enterprise/issues/179)) ([6ffebe5](https://github.com/edx/frontend-enterprise/commit/6ffebe5ba490567c691eac978125eee530707556))



## 1.1.0 (2021-10-14)


### Features

* add sendEnterpriseTrackEvent to utils package ([aa8ec75](https://github.com/edx/frontend-enterprise/commit/aa8ec755b1dda199fbe236dbeb742872a10f3f91))



# 1.0.0 (2021-08-17)

**Note:** Version bump only for package @edx/frontend-enterprise-utils





## [0.1.7](https://github.com/edx/frontend-enterprise/compare/@edx/frontend-enterprise-utils@0.1.6...@edx/frontend-enterprise-utils@0.1.7) (2021-05-20)


### Bug Fixes

* downgrade query-string to pin to ES5 compatible version ([#129](https://github.com/edx/frontend-enterprise/issues/129)) ([52688ac](https://github.com/edx/frontend-enterprise/commit/52688acc9c4113f9bed2423434e7b2c7d88221f8))





## [0.1.6](https://github.com/edx/frontend-enterprise/compare/@edx/frontend-enterprise-utils@0.1.5...@edx/frontend-enterprise-utils@0.1.6) (2021-05-20)


### Bug Fixes

* split role name from context in JWT user roles ([#122](https://github.com/edx/frontend-enterprise/issues/122)) ([348bc6c](https://github.com/edx/frontend-enterprise/commit/348bc6c5c912d2c92ccee5869d49890528e6e51a))





## [0.1.5](https://github.com/edx/frontend-enterprise/compare/@edx/frontend-enterprise-utils@0.1.3...@edx/frontend-enterprise-utils@0.1.5) (2021-05-10)


### Bug Fixes

* run lerna commands for all packages regardless of whether they changed in release.yml ([#109](https://github.com/edx/frontend-enterprise/issues/109)) ([608b1fb](https://github.com/edx/frontend-enterprise/commit/608b1fb4c3b5343f05ef994436dbbd2418668e17))
* update publishing behavior and add additional docs ([#104](https://github.com/edx/frontend-enterprise/issues/104)) ([525c430](https://github.com/edx/frontend-enterprise/commit/525c430d5027e4514a27edccfed3d6ed4ddae091))





## [0.1.4](https://github.com/edx/frontend-enterprise/compare/@edx/frontend-enterprise-utils@0.1.3...@edx/frontend-enterprise-utils@0.1.4) (2021-05-10)


### Bug Fixes

* run lerna commands for all packages regardless of whether they changed in release.yml ([#109](https://github.com/edx/frontend-enterprise/issues/109)) ([608b1fb](https://github.com/edx/frontend-enterprise/commit/608b1fb4c3b5343f05ef994436dbbd2418668e17))
* update publishing behavior and add additional docs ([#104](https://github.com/edx/frontend-enterprise/issues/104)) ([525c430](https://github.com/edx/frontend-enterprise/commit/525c430d5027e4514a27edccfed3d6ed4ddae091))





## [0.1.3](https://github.com/edx/frontend-enterprise/compare/@edx/frontend-enterprise-utils@0.1.2...@edx/frontend-enterprise-utils@0.1.3) (2021-05-08)

**Note:** Version bump only for package @edx/frontend-enterprise-utils





## [0.1.2](https://github.com/edx/frontend-enterprise/compare/@edx/frontend-enterprise-utils@0.1.1...@edx/frontend-enterprise-utils@0.1.2) (2021-05-07)

**Note:** Version bump only for package @edx/frontend-enterprise-utils





## [0.1.1](https://github.com/edx/frontend-enterprise/compare/@edx/frontend-enterprise-utils@0.1.0...@edx/frontend-enterprise-utils@0.1.1) (2021-05-07)

**Note:** Version bump only for package @edx/frontend-enterprise-utils





# 0.1.0 (2021-05-06)


* refactor!: separate components into npm packages in monorepo; add logistration-redirect (#97) ([3e2a3ac](https://github.com/edx/frontend-enterprise/commit/3e2a3acf327211ed82415e8052d008bd1fdd2e33)), closes [#97](https://github.com/edx/frontend-enterprise/issues/97)


### BREAKING CHANGES

* refactor to split ui components into separate packages using Lerna
