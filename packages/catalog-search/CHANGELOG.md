# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [11.0.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@10.8.2...@edx/frontend-enterprise-catalog-search@11.0.0) (2025-02-26)


### ⚠ BREAKING CHANGES

* drop support for Paragon v21 in `@edx/frontend-enterprise-catalog-search`

* fix: use secondary pagination variant

### Features

* support React 18; drop support for Paragon v21 in favor of v22 ([#441](https://github.com/openedx/frontend-enterprise/issues/441)) ([7046540](https://github.com/openedx/frontend-enterprise/commit/70465404bf8d9fc1a426639d8ce1a3cc18fee3db))



## [10.8.2](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@10.8.1...@edx/frontend-enterprise-catalog-search@10.8.2) (2025-02-26)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





## [10.8.1](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@10.8.0...@edx/frontend-enterprise-catalog-search@10.8.1) (2025-02-24)


### Bug Fixes

* **deps:** update all non-major dependencies ([#419](https://github.com/openedx/frontend-enterprise/issues/419)) ([2958977](https://github.com/openedx/frontend-enterprise/commit/2958977042b774b3753034c2ade895c44514f99c))



## [10.8.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@10.7.1...@edx/frontend-enterprise-catalog-search@10.8.0) (2024-11-25)


### Features

* add segment event to track the selected value for learning type dropdown ([#415](https://github.com/openedx/frontend-enterprise/issues/415)) ([10e2c35](https://github.com/openedx/frontend-enterprise/commit/10e2c35b17da40191b58d0d41977ac47f2b6157e))



## [10.7.1](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@10.7.0...@edx/frontend-enterprise-catalog-search@10.7.1) (2024-09-16)


### Bug Fixes

* removing prequery optimizely code ([#413](https://github.com/openedx/frontend-enterprise/issues/413)) ([68d3497](https://github.com/openedx/frontend-enterprise/commit/68d3497511f953a46cf1dfc4fadd639f001b6a3f))



## [10.7.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@10.6.0...@edx/frontend-enterprise-catalog-search@10.7.0) (2024-09-09)


### Features

* Add Beta label to videos in the learning type facet ([#409](https://github.com/openedx/frontend-enterprise/issues/409)) ([776e35e](https://github.com/openedx/frontend-enterprise/commit/776e35e5d9fd35cfa521527e8c00f5a9249a4ef2))



## [10.6.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@10.5.0...@edx/frontend-enterprise-catalog-search@10.6.0) (2024-08-07)


### Features

* show video learning type to learners with active subscription ([#404](https://github.com/openedx/frontend-enterprise/issues/404)) ([0207bb9](https://github.com/openedx/frontend-enterprise/commit/0207bb9ee4a9951377964364b4b4f7f07eb6ab1b))



## [10.5.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@10.4.0...@edx/frontend-enterprise-catalog-search@10.5.0) (2024-07-12)


### Features

* added video in learning type facet ([#401](https://github.com/openedx/frontend-enterprise/issues/401)) ([fea3bbd](https://github.com/openedx/frontend-enterprise/commit/fea3bbd522048fe021a1ccee3783ae8a6c6f48ae))



## [10.4.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@10.3.0...@edx/frontend-enterprise-catalog-search@10.4.0) (2024-07-11)


### Features

* translate language, level and availability dropdown options ([#399](https://github.com/openedx/frontend-enterprise/issues/399)) ([330c4ce](https://github.com/openedx/frontend-enterprise/commit/330c4ce1a1e320cff5268d606c94d743e0df2891))



## [10.3.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@10.2.0...@edx/frontend-enterprise-catalog-search@10.3.0) (2024-05-21)


### Features

* Added scripts and marked strings for i18n. ([#396](https://github.com/openedx/frontend-enterprise/issues/396)) ([a0fb639](https://github.com/openedx/frontend-enterprise/commit/a0fb639c34f7907ac8d0ef41ffff730065b27662))



## [10.2.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@10.1.0...@edx/frontend-enterprise-catalog-search@10.2.0) (2024-05-15)


### Features

* control visibility of search box via flag prop ([#394](https://github.com/openedx/frontend-enterprise/issues/394)) ([30d8f49](https://github.com/openedx/frontend-enterprise/commit/30d8f49151d7fb8ca9d98dc0d487bfea2f63c482))



## [10.1.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@10.0.0...@edx/frontend-enterprise-catalog-search@10.1.0) (2024-04-29)


### Features

* updated frontend-build & frontend-platform major versions ([#387](https://github.com/openedx/frontend-enterprise/issues/387)) ([e9da78e](https://github.com/openedx/frontend-enterprise/commit/e9da78e264c6e5b590eff351b5c1477c0716f928))



## [10.0.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@5.0.0...@edx/frontend-enterprise-catalog-search@10.0.0) (2024-03-29)


### ⚠ BREAKING CHANGES

* consuming applications must now provide paragon from the @openedx scope

* refactor: replace @edx/paragon and @edx/frontend-build

* fix: fixed package issues

* fix: updated dependency

* fix: updated package lock file to fix ci issue

* refactor: updated frontend-platform to v7 along with peer Dependencies

### Features

* add prequery search suggestions ([#371](https://github.com/openedx/frontend-enterprise/issues/371)) ([3651ee0](https://github.com/openedx/frontend-enterprise/commit/3651ee0f0e77e461956175d98aaa4addb38a1762))
* add subtitle facet to SearchHeader ([#382](https://github.com/openedx/frontend-enterprise/issues/382)) ([047844f](https://github.com/openedx/frontend-enterprise/commit/047844fc32df30a09fddcefdc436a951bc821849))
* added prequery event handler to search ([#373](https://github.com/openedx/frontend-enterprise/issues/373)) ([5705327](https://github.com/openedx/frontend-enterprise/commit/5705327b5aac701cf5288a697071ed48980b9859))
* allow Paragon v21 in catalog-search ([#356](https://github.com/openedx/frontend-enterprise/issues/356)) ([75005f5](https://github.com/openedx/frontend-enterprise/commit/75005f5e27304e3147fc141ef5dc1bc6ac64a834))
* bumped frontend-platform to v6 ([#364](https://github.com/openedx/frontend-enterprise/issues/364)) ([1541b86](https://github.com/openedx/frontend-enterprise/commit/1541b864dc6c351ea595d9f0c5669299af3b64cc))
* enable prequery suggestions only for variant group ([#377](https://github.com/openedx/frontend-enterprise/issues/377)) ([fbee42a](https://github.com/openedx/frontend-enterprise/commit/fbee42a8b2a7a3111a83bf34b1917fc96454ba01))
* fix prequery suggestion highlight container ([#380](https://github.com/openedx/frontend-enterprise/issues/380)) ([d54a0c7](https://github.com/openedx/frontend-enterprise/commit/d54a0c765def9850e37296e3fd8d7709664d08b4))
* removing free/all filter ([#359](https://github.com/openedx/frontend-enterprise/issues/359)) ([f187fbd](https://github.com/openedx/frontend-enterprise/commit/f187fbd89eb8c6b490b8a0fafb7f192ed9dcf24c))


### Bug Fixes

* bump frontend-platform ([#363](https://github.com/openedx/frontend-enterprise/issues/363)) ([1413ef2](https://github.com/openedx/frontend-enterprise/commit/1413ef21a1736d572bddb770352f33d505242bef))
* remove pathways from customers search ([#366](https://github.com/openedx/frontend-enterprise/issues/366)) ([d4625c9](https://github.com/openedx/frontend-enterprise/commit/d4625c92443d088c2319f81ea516c2613b8d3943))


### Miscellaneous Chores

* move paragon to peer dependency using [@openedx](https://github.com/openedx) scope and upgrade frontend-platform ([#367](https://github.com/openedx/frontend-enterprise/issues/367)) ([d121d67](https://github.com/openedx/frontend-enterprise/commit/d121d67efa6e84de86a7f3eb84acb674f2d4a380))



## [9.0.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@5.0.0...@edx/frontend-enterprise-catalog-search@9.0.0) (2024-03-11)


### ⚠ BREAKING CHANGES

* consuming applications must now provide paragon from the @openedx scope

* refactor: replace @edx/paragon and @edx/frontend-build

* fix: fixed package issues

* fix: updated dependency

* fix: updated package lock file to fix ci issue

* refactor: updated frontend-platform to v7 along with peer Dependencies

### Features

* add prequery search suggestions ([#371](https://github.com/openedx/frontend-enterprise/issues/371)) ([3651ee0](https://github.com/openedx/frontend-enterprise/commit/3651ee0f0e77e461956175d98aaa4addb38a1762))
* added prequery event handler to search ([#373](https://github.com/openedx/frontend-enterprise/issues/373)) ([5705327](https://github.com/openedx/frontend-enterprise/commit/5705327b5aac701cf5288a697071ed48980b9859))
* allow Paragon v21 in catalog-search ([#356](https://github.com/openedx/frontend-enterprise/issues/356)) ([75005f5](https://github.com/openedx/frontend-enterprise/commit/75005f5e27304e3147fc141ef5dc1bc6ac64a834))
* bumped frontend-platform to v6 ([#364](https://github.com/openedx/frontend-enterprise/issues/364)) ([1541b86](https://github.com/openedx/frontend-enterprise/commit/1541b864dc6c351ea595d9f0c5669299af3b64cc))
* enable prequery suggestions only for variant group ([#377](https://github.com/openedx/frontend-enterprise/issues/377)) ([fbee42a](https://github.com/openedx/frontend-enterprise/commit/fbee42a8b2a7a3111a83bf34b1917fc96454ba01))
* fix prequery suggestion highlight container ([#380](https://github.com/openedx/frontend-enterprise/issues/380)) ([d54a0c7](https://github.com/openedx/frontend-enterprise/commit/d54a0c765def9850e37296e3fd8d7709664d08b4))
* removing free/all filter ([#359](https://github.com/openedx/frontend-enterprise/issues/359)) ([f187fbd](https://github.com/openedx/frontend-enterprise/commit/f187fbd89eb8c6b490b8a0fafb7f192ed9dcf24c))


### Bug Fixes

* bump frontend-platform ([#363](https://github.com/openedx/frontend-enterprise/issues/363)) ([1413ef2](https://github.com/openedx/frontend-enterprise/commit/1413ef21a1736d572bddb770352f33d505242bef))
* remove pathways from customers search ([#366](https://github.com/openedx/frontend-enterprise/issues/366)) ([d4625c9](https://github.com/openedx/frontend-enterprise/commit/d4625c92443d088c2319f81ea516c2613b8d3943))


### Miscellaneous Chores

* move paragon to peer dependency using [@openedx](https://github.com/openedx) scope and upgrade frontend-platform ([#367](https://github.com/openedx/frontend-enterprise/issues/367)) ([d121d67](https://github.com/openedx/frontend-enterprise/commit/d121d67efa6e84de86a7f3eb84acb674f2d4a380))



## [8.0.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@5.0.0...@edx/frontend-enterprise-catalog-search@8.0.0) (2024-03-05)


### ⚠ BREAKING CHANGES

* consuming applications must now provide paragon from the @openedx scope

* refactor: replace @edx/paragon and @edx/frontend-build

* fix: fixed package issues

* fix: updated dependency

* fix: updated package lock file to fix ci issue

* refactor: updated frontend-platform to v7 along with peer Dependencies

### Features

* add prequery search suggestions ([#371](https://github.com/openedx/frontend-enterprise/issues/371)) ([3651ee0](https://github.com/openedx/frontend-enterprise/commit/3651ee0f0e77e461956175d98aaa4addb38a1762))
* added prequery event handler to search ([#373](https://github.com/openedx/frontend-enterprise/issues/373)) ([5705327](https://github.com/openedx/frontend-enterprise/commit/5705327b5aac701cf5288a697071ed48980b9859))
* allow Paragon v21 in catalog-search ([#356](https://github.com/openedx/frontend-enterprise/issues/356)) ([75005f5](https://github.com/openedx/frontend-enterprise/commit/75005f5e27304e3147fc141ef5dc1bc6ac64a834))
* bumped frontend-platform to v6 ([#364](https://github.com/openedx/frontend-enterprise/issues/364)) ([1541b86](https://github.com/openedx/frontend-enterprise/commit/1541b864dc6c351ea595d9f0c5669299af3b64cc))
* enable prequery suggestions only for variant group ([#377](https://github.com/openedx/frontend-enterprise/issues/377)) ([fbee42a](https://github.com/openedx/frontend-enterprise/commit/fbee42a8b2a7a3111a83bf34b1917fc96454ba01))
* removing free/all filter ([#359](https://github.com/openedx/frontend-enterprise/issues/359)) ([f187fbd](https://github.com/openedx/frontend-enterprise/commit/f187fbd89eb8c6b490b8a0fafb7f192ed9dcf24c))


### Bug Fixes

* bump frontend-platform ([#363](https://github.com/openedx/frontend-enterprise/issues/363)) ([1413ef2](https://github.com/openedx/frontend-enterprise/commit/1413ef21a1736d572bddb770352f33d505242bef))
* remove pathways from customers search ([#366](https://github.com/openedx/frontend-enterprise/issues/366)) ([d4625c9](https://github.com/openedx/frontend-enterprise/commit/d4625c92443d088c2319f81ea516c2613b8d3943))


### Miscellaneous Chores

* move paragon to peer dependency using [@openedx](https://github.com/openedx) scope and upgrade frontend-platform ([#367](https://github.com/openedx/frontend-enterprise/issues/367)) ([d121d67](https://github.com/openedx/frontend-enterprise/commit/d121d67efa6e84de86a7f3eb84acb674f2d4a380))



## [7.0.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@5.0.0...@edx/frontend-enterprise-catalog-search@7.0.0) (2024-02-20)


### ⚠ BREAKING CHANGES

* consuming applications must now provide paragon from the @openedx scope

* refactor: replace @edx/paragon and @edx/frontend-build

* fix: fixed package issues

* fix: updated dependency

* fix: updated package lock file to fix ci issue

* refactor: updated frontend-platform to v7 along with peer Dependencies

### Features

* add prequery search suggestions ([#371](https://github.com/openedx/frontend-enterprise/issues/371)) ([3651ee0](https://github.com/openedx/frontend-enterprise/commit/3651ee0f0e77e461956175d98aaa4addb38a1762))
* added prequery event handler to search ([4fe2195](https://github.com/openedx/frontend-enterprise/commit/4fe2195944c8d7bd048a4df729bba1cf9bcb3c89))
* allow Paragon v21 in catalog-search ([#356](https://github.com/openedx/frontend-enterprise/issues/356)) ([75005f5](https://github.com/openedx/frontend-enterprise/commit/75005f5e27304e3147fc141ef5dc1bc6ac64a834))
* bumped frontend-platform to v6 ([#364](https://github.com/openedx/frontend-enterprise/issues/364)) ([1541b86](https://github.com/openedx/frontend-enterprise/commit/1541b864dc6c351ea595d9f0c5669299af3b64cc))
* removing free/all filter ([#359](https://github.com/openedx/frontend-enterprise/issues/359)) ([f187fbd](https://github.com/openedx/frontend-enterprise/commit/f187fbd89eb8c6b490b8a0fafb7f192ed9dcf24c))


### Bug Fixes

* bump frontend-platform ([#363](https://github.com/openedx/frontend-enterprise/issues/363)) ([1413ef2](https://github.com/openedx/frontend-enterprise/commit/1413ef21a1736d572bddb770352f33d505242bef))
* remove pathways from customers search ([#366](https://github.com/openedx/frontend-enterprise/issues/366)) ([d4625c9](https://github.com/openedx/frontend-enterprise/commit/d4625c92443d088c2319f81ea516c2613b8d3943))
* renamed testing unit ([f1ce26f](https://github.com/openedx/frontend-enterprise/commit/f1ce26f844e14bc19a4e180701f496b819b1a7be))
* updated test and fixed lint error ([287dc26](https://github.com/openedx/frontend-enterprise/commit/287dc261789c7481881a42eb3c8fd28093cc377e))


### Miscellaneous Chores

* move paragon to peer dependency using [@openedx](https://github.com/openedx) scope and upgrade frontend-platform ([#367](https://github.com/openedx/frontend-enterprise/issues/367)) ([d121d67](https://github.com/openedx/frontend-enterprise/commit/d121d67efa6e84de86a7f3eb84acb674f2d4a380))



## [6.0.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.1.5...@edx/frontend-enterprise-catalog-search@6.0.0) (2024-02-12)


### ⚠ BREAKING CHANGES

* consuming applications must now provide paragon from the @openedx scope

* refactor: replace @edx/paragon and @edx/frontend-build

* fix: fixed package issues

* fix: updated dependency

* fix: updated package lock file to fix ci issue

* refactor: updated frontend-platform to v7 along with peer Dependencies
* Upgrade react-router-dom from v5 to v6.
Upgrade frontend-platform from v4 to v5.

### Features

* Add .npmrc file to more .gitignore files ([#303](https://github.com/openedx/frontend-enterprise/issues/303)) ([d890c21](https://github.com/openedx/frontend-enterprise/commit/d890c212c3f8c5ec81e6dee63f68029ad0b00552))
* add prequery search suggestions ([#371](https://github.com/openedx/frontend-enterprise/issues/371)) ([3651ee0](https://github.com/openedx/frontend-enterprise/commit/3651ee0f0e77e461956175d98aaa4addb38a1762))
* adding exec ed compatibility to suggested search ([#288](https://github.com/openedx/frontend-enterprise/issues/288)) ([21d608c](https://github.com/openedx/frontend-enterprise/commit/21d608ce49b764e62101b5f696b463f6800ddcb0))
* allow Paragon v21 in catalog-search ([#356](https://github.com/openedx/frontend-enterprise/issues/356)) ([75005f5](https://github.com/openedx/frontend-enterprise/commit/75005f5e27304e3147fc141ef5dc1bc6ac64a834))
* bumped frontend-platform to v6 ([#364](https://github.com/openedx/frontend-enterprise/issues/364)) ([1541b86](https://github.com/openedx/frontend-enterprise/commit/1541b864dc6c351ea595d9f0c5669299af3b64cc))
* removing free/all filter ([#359](https://github.com/openedx/frontend-enterprise/issues/359)) ([f187fbd](https://github.com/openedx/frontend-enterprise/commit/f187fbd89eb8c6b490b8a0fafb7f192ed9dcf24c))
* update react & react-dom to v17 ([#338](https://github.com/openedx/frontend-enterprise/issues/338)) ([b1b548c](https://github.com/openedx/frontend-enterprise/commit/b1b548c0ec27572d639f276507a1495b78db9497))
* Updated course link for executive4 education courses. ([#336](https://github.com/openedx/frontend-enterprise/issues/336)) ([4212580](https://github.com/openedx/frontend-enterprise/commit/4212580f4fd6c2de4696f25e81f50f2714db1672))
* upgrade react router to v6 ([#344](https://github.com/openedx/frontend-enterprise/issues/344)) ([54f6340](https://github.com/openedx/frontend-enterprise/commit/54f6340f764a9120bebd654564e0d61918a3cffa))
* upgraded to node v18, added .nvmrc and updated workflows ([#306](https://github.com/openedx/frontend-enterprise/issues/306)) ([0508783](https://github.com/openedx/frontend-enterprise/commit/050878307ff5f8a94385b7f41070dec19c7e84cc))


### Bug Fixes

* Bump all versions one final time I hope.... ([#297](https://github.com/openedx/frontend-enterprise/issues/297)) ([3452d81](https://github.com/openedx/frontend-enterprise/commit/3452d810bad4b7292ce342ac96bec500809b532d))
* bump frontend-platform ([#363](https://github.com/openedx/frontend-enterprise/issues/363)) ([1413ef2](https://github.com/openedx/frontend-enterprise/commit/1413ef21a1736d572bddb770352f33d505242bef))
* manully bump versions after failed automation run ([#301](https://github.com/openedx/frontend-enterprise/issues/301)) ([f1e8616](https://github.com/openedx/frontend-enterprise/commit/f1e8616996c46ffda1c7596be6fc323136ac34c2))
* missing space in search ([#333](https://github.com/openedx/frontend-enterprise/issues/333)) ([c604834](https://github.com/openedx/frontend-enterprise/commit/c604834d2efcfeba5d692e0f8dc7bb1681e72262))
* remove pathways from customers search ([#366](https://github.com/openedx/frontend-enterprise/issues/366)) ([d4625c9](https://github.com/openedx/frontend-enterprise/commit/d4625c92443d088c2319f81ea516c2613b8d3943))


### Miscellaneous Chores

* move paragon to peer dependency using [@openedx](https://github.com/openedx) scope and upgrade frontend-platform ([#367](https://github.com/openedx/frontend-enterprise/issues/367)) ([d121d67](https://github.com/openedx/frontend-enterprise/commit/d121d67efa6e84de86a7f3eb84acb674f2d4a380))



## [5.6.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@5.0.0...@edx/frontend-enterprise-catalog-search@5.6.0) (2024-02-01)


### Features

* add prequery search suggestions ([f8dfe85](https://github.com/openedx/frontend-enterprise/commit/f8dfe85cdbcfd70a290d61ddea8242768e437080))
* allow Paragon v21 in catalog-search ([#356](https://github.com/openedx/frontend-enterprise/issues/356)) ([75005f5](https://github.com/openedx/frontend-enterprise/commit/75005f5e27304e3147fc141ef5dc1bc6ac64a834))
* bumped frontend-platform to v6 ([#364](https://github.com/openedx/frontend-enterprise/issues/364)) ([1541b86](https://github.com/openedx/frontend-enterprise/commit/1541b864dc6c351ea595d9f0c5669299af3b64cc))
* removing free/all filter ([#359](https://github.com/openedx/frontend-enterprise/issues/359)) ([f187fbd](https://github.com/openedx/frontend-enterprise/commit/f187fbd89eb8c6b490b8a0fafb7f192ed9dcf24c))


### Bug Fixes

* bump frontend-platform ([#363](https://github.com/openedx/frontend-enterprise/issues/363)) ([1413ef2](https://github.com/openedx/frontend-enterprise/commit/1413ef21a1736d572bddb770352f33d505242bef))
* refactored to include additional prop for feature flag ([bd600b6](https://github.com/openedx/frontend-enterprise/commit/bd600b624e51f9b8f0eff0b5eb467ec92fa6a828))
* remove pathways from customers search ([#366](https://github.com/openedx/frontend-enterprise/issues/366)) ([d4625c9](https://github.com/openedx/frontend-enterprise/commit/d4625c92443d088c2319f81ea516c2613b8d3943))



## [5.5.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@5.0.0...@edx/frontend-enterprise-catalog-search@5.5.0) (2024-01-10)


### Features

* allow Paragon v21 in catalog-search ([#356](https://github.com/openedx/frontend-enterprise/issues/356)) ([75005f5](https://github.com/openedx/frontend-enterprise/commit/75005f5e27304e3147fc141ef5dc1bc6ac64a834))
* removing free/all filter ([#359](https://github.com/openedx/frontend-enterprise/issues/359)) ([f187fbd](https://github.com/openedx/frontend-enterprise/commit/f187fbd89eb8c6b490b8a0fafb7f192ed9dcf24c))


### Bug Fixes

* bump frontend-platform ([#363](https://github.com/openedx/frontend-enterprise/issues/363)) ([1413ef2](https://github.com/openedx/frontend-enterprise/commit/1413ef21a1736d572bddb770352f33d505242bef))
* remove pathways from customers search ([#366](https://github.com/openedx/frontend-enterprise/issues/366)) ([d4625c9](https://github.com/openedx/frontend-enterprise/commit/d4625c92443d088c2319f81ea516c2613b8d3943))



## [5.4.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@5.0.0...@edx/frontend-enterprise-catalog-search@5.4.0) (2023-10-17)


### Features

* allow Paragon v21 in catalog-search ([#356](https://github.com/openedx/frontend-enterprise/issues/356)) ([75005f5](https://github.com/openedx/frontend-enterprise/commit/75005f5e27304e3147fc141ef5dc1bc6ac64a834))
* removing free/all filter ([#359](https://github.com/openedx/frontend-enterprise/issues/359)) ([f187fbd](https://github.com/openedx/frontend-enterprise/commit/f187fbd89eb8c6b490b8a0fafb7f192ed9dcf24c))


### Bug Fixes

* bump frontend-platform ([#363](https://github.com/openedx/frontend-enterprise/issues/363)) ([1413ef2](https://github.com/openedx/frontend-enterprise/commit/1413ef21a1736d572bddb770352f33d505242bef))



## [5.3.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@5.0.0...@edx/frontend-enterprise-catalog-search@5.3.0) (2023-09-28)


### Features

* allow Paragon v21 in catalog-search ([#356](https://github.com/openedx/frontend-enterprise/issues/356)) ([75005f5](https://github.com/openedx/frontend-enterprise/commit/75005f5e27304e3147fc141ef5dc1bc6ac64a834))
* removing free/all filter ([#359](https://github.com/openedx/frontend-enterprise/issues/359)) ([f187fbd](https://github.com/openedx/frontend-enterprise/commit/f187fbd89eb8c6b490b8a0fafb7f192ed9dcf24c))



## [5.2.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@5.0.0...@edx/frontend-enterprise-catalog-search@5.2.0) (2023-09-28)


### Features

* allow Paragon v21 in catalog-search ([#356](https://github.com/openedx/frontend-enterprise/issues/356)) ([75005f5](https://github.com/openedx/frontend-enterprise/commit/75005f5e27304e3147fc141ef5dc1bc6ac64a834))
* removing free/all filter ([#359](https://github.com/openedx/frontend-enterprise/issues/359)) ([f187fbd](https://github.com/openedx/frontend-enterprise/commit/f187fbd89eb8c6b490b8a0fafb7f192ed9dcf24c))



## [5.1.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@5.0.0...@edx/frontend-enterprise-catalog-search@5.1.0) (2023-09-07)


### Features

* allow Paragon v21 in catalog-search ([#356](https://github.com/openedx/frontend-enterprise/issues/356)) ([75005f5](https://github.com/openedx/frontend-enterprise/commit/75005f5e27304e3147fc141ef5dc1bc6ac64a834))



## [5.0.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.1.5...@edx/frontend-enterprise-catalog-search@5.0.0) (2023-08-15)


### ⚠ BREAKING CHANGES

* Upgrade react-router-dom from v5 to v6.
Upgrade frontend-platform from v4 to v5.

### Features

* Add .npmrc file to more .gitignore files ([#303](https://github.com/openedx/frontend-enterprise/issues/303)) ([d890c21](https://github.com/openedx/frontend-enterprise/commit/d890c212c3f8c5ec81e6dee63f68029ad0b00552))
* adding exec ed compatibility to suggested search ([#288](https://github.com/openedx/frontend-enterprise/issues/288)) ([21d608c](https://github.com/openedx/frontend-enterprise/commit/21d608ce49b764e62101b5f696b463f6800ddcb0))
* update react & react-dom to v17 ([#338](https://github.com/openedx/frontend-enterprise/issues/338)) ([b1b548c](https://github.com/openedx/frontend-enterprise/commit/b1b548c0ec27572d639f276507a1495b78db9497))
* Updated course link for executive4 education courses. ([#336](https://github.com/openedx/frontend-enterprise/issues/336)) ([4212580](https://github.com/openedx/frontend-enterprise/commit/4212580f4fd6c2de4696f25e81f50f2714db1672))
* upgrade react router to v6 ([#344](https://github.com/openedx/frontend-enterprise/issues/344)) ([54f6340](https://github.com/openedx/frontend-enterprise/commit/54f6340f764a9120bebd654564e0d61918a3cffa))
* upgraded to node v18, added .nvmrc and updated workflows ([#306](https://github.com/openedx/frontend-enterprise/issues/306)) ([0508783](https://github.com/openedx/frontend-enterprise/commit/050878307ff5f8a94385b7f41070dec19c7e84cc))


### Bug Fixes

* Bump all versions one final time I hope.... ([#297](https://github.com/openedx/frontend-enterprise/issues/297)) ([3452d81](https://github.com/openedx/frontend-enterprise/commit/3452d810bad4b7292ce342ac96bec500809b532d))
* manully bump versions after failed automation run ([#301](https://github.com/openedx/frontend-enterprise/issues/301)) ([f1e8616](https://github.com/openedx/frontend-enterprise/commit/f1e8616996c46ffda1c7596be6fc323136ac34c2))
* missing space in search ([#333](https://github.com/openedx/frontend-enterprise/issues/333)) ([c604834](https://github.com/openedx/frontend-enterprise/commit/c604834d2efcfeba5d692e0f8dc7bb1681e72262))



## [4.6.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.1.5...@edx/frontend-enterprise-catalog-search@4.6.0) (2023-08-09)


### Features

* Add .npmrc file to more .gitignore files ([#303](https://github.com/openedx/frontend-enterprise/issues/303)) ([d890c21](https://github.com/openedx/frontend-enterprise/commit/d890c212c3f8c5ec81e6dee63f68029ad0b00552))
* adding exec ed compatibility to suggested search ([#288](https://github.com/openedx/frontend-enterprise/issues/288)) ([21d608c](https://github.com/openedx/frontend-enterprise/commit/21d608ce49b764e62101b5f696b463f6800ddcb0))
* update react & react-dom to v17 ([#338](https://github.com/openedx/frontend-enterprise/issues/338)) ([b1b548c](https://github.com/openedx/frontend-enterprise/commit/b1b548c0ec27572d639f276507a1495b78db9497))
* Updated course link for executive4 education courses. ([#336](https://github.com/openedx/frontend-enterprise/issues/336)) ([4212580](https://github.com/openedx/frontend-enterprise/commit/4212580f4fd6c2de4696f25e81f50f2714db1672))
* upgraded to node v18, added .nvmrc and updated workflows ([#306](https://github.com/openedx/frontend-enterprise/issues/306)) ([0508783](https://github.com/openedx/frontend-enterprise/commit/050878307ff5f8a94385b7f41070dec19c7e84cc))


### Bug Fixes

* Bump all versions one final time I hope.... ([#297](https://github.com/openedx/frontend-enterprise/issues/297)) ([3452d81](https://github.com/openedx/frontend-enterprise/commit/3452d810bad4b7292ce342ac96bec500809b532d))
* manully bump versions after failed automation run ([#301](https://github.com/openedx/frontend-enterprise/issues/301)) ([f1e8616](https://github.com/openedx/frontend-enterprise/commit/f1e8616996c46ffda1c7596be6fc323136ac34c2))
* missing space in search ([#333](https://github.com/openedx/frontend-enterprise/issues/333)) ([c604834](https://github.com/openedx/frontend-enterprise/commit/c604834d2efcfeba5d692e0f8dc7bb1681e72262))



## [4.5.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.1.5...@edx/frontend-enterprise-catalog-search@4.5.0) (2023-07-20)


### Features

* Add .npmrc file to more .gitignore files ([#303](https://github.com/openedx/frontend-enterprise/issues/303)) ([d890c21](https://github.com/openedx/frontend-enterprise/commit/d890c212c3f8c5ec81e6dee63f68029ad0b00552))
* adding exec ed compatibility to suggested search ([#288](https://github.com/openedx/frontend-enterprise/issues/288)) ([21d608c](https://github.com/openedx/frontend-enterprise/commit/21d608ce49b764e62101b5f696b463f6800ddcb0))
* update react & react-dom to v17 ([#338](https://github.com/openedx/frontend-enterprise/issues/338)) ([b1b548c](https://github.com/openedx/frontend-enterprise/commit/b1b548c0ec27572d639f276507a1495b78db9497))
* Updated course link for executive4 education courses. ([#336](https://github.com/openedx/frontend-enterprise/issues/336)) ([4212580](https://github.com/openedx/frontend-enterprise/commit/4212580f4fd6c2de4696f25e81f50f2714db1672))
* upgraded to node v18, added .nvmrc and updated workflows ([#306](https://github.com/openedx/frontend-enterprise/issues/306)) ([0508783](https://github.com/openedx/frontend-enterprise/commit/050878307ff5f8a94385b7f41070dec19c7e84cc))


### Bug Fixes

* Bump all versions one final time I hope.... ([#297](https://github.com/openedx/frontend-enterprise/issues/297)) ([3452d81](https://github.com/openedx/frontend-enterprise/commit/3452d810bad4b7292ce342ac96bec500809b532d))
* manully bump versions after failed automation run ([#301](https://github.com/openedx/frontend-enterprise/issues/301)) ([f1e8616](https://github.com/openedx/frontend-enterprise/commit/f1e8616996c46ffda1c7596be6fc323136ac34c2))
* missing space in search ([#333](https://github.com/openedx/frontend-enterprise/issues/333)) ([c604834](https://github.com/openedx/frontend-enterprise/commit/c604834d2efcfeba5d692e0f8dc7bb1681e72262))



## [4.4.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.1.5...@edx/frontend-enterprise-catalog-search@4.4.0) (2023-06-15)


### Features

* Add .npmrc file to more .gitignore files ([#303](https://github.com/openedx/frontend-enterprise/issues/303)) ([d890c21](https://github.com/openedx/frontend-enterprise/commit/d890c212c3f8c5ec81e6dee63f68029ad0b00552))
* adding exec ed compatibility to suggested search ([#288](https://github.com/openedx/frontend-enterprise/issues/288)) ([21d608c](https://github.com/openedx/frontend-enterprise/commit/21d608ce49b764e62101b5f696b463f6800ddcb0))
* Updated course link for executive4 education courses. ([#336](https://github.com/openedx/frontend-enterprise/issues/336)) ([4212580](https://github.com/openedx/frontend-enterprise/commit/4212580f4fd6c2de4696f25e81f50f2714db1672))
* upgraded to node v18, added .nvmrc and updated workflows ([#306](https://github.com/openedx/frontend-enterprise/issues/306)) ([0508783](https://github.com/openedx/frontend-enterprise/commit/050878307ff5f8a94385b7f41070dec19c7e84cc))


### Bug Fixes

* Bump all versions one final time I hope.... ([#297](https://github.com/openedx/frontend-enterprise/issues/297)) ([3452d81](https://github.com/openedx/frontend-enterprise/commit/3452d810bad4b7292ce342ac96bec500809b532d))
* manully bump versions after failed automation run ([#301](https://github.com/openedx/frontend-enterprise/issues/301)) ([f1e8616](https://github.com/openedx/frontend-enterprise/commit/f1e8616996c46ffda1c7596be6fc323136ac34c2))
* missing space in search ([#333](https://github.com/openedx/frontend-enterprise/issues/333)) ([c604834](https://github.com/openedx/frontend-enterprise/commit/c604834d2efcfeba5d692e0f8dc7bb1681e72262))



## [4.3.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@4.2.0...@edx/frontend-enterprise-catalog-search@4.3.0) (2023-06-08)


### Features

* Updated course link for executive education courses. ([4212580](https://github.com/openedx/frontend-enterprise/commit/4212580f4fd6c2de4696f25e81f50f2714db1672))

## [4.2.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.1.5...@edx/frontend-enterprise-catalog-search@4.2.0) (2023-05-31)


### Features

* Add .npmrc file to more .gitignore files ([#303](https://github.com/openedx/frontend-enterprise/issues/303)) ([d890c21](https://github.com/openedx/frontend-enterprise/commit/d890c212c3f8c5ec81e6dee63f68029ad0b00552))
* adding exec ed compatibility to suggested search ([#288](https://github.com/openedx/frontend-enterprise/issues/288)) ([21d608c](https://github.com/openedx/frontend-enterprise/commit/21d608ce49b764e62101b5f696b463f6800ddcb0))
* upgraded to node v18, added .nvmrc and updated workflows ([#306](https://github.com/openedx/frontend-enterprise/issues/306)) ([0508783](https://github.com/openedx/frontend-enterprise/commit/050878307ff5f8a94385b7f41070dec19c7e84cc))


### Bug Fixes

* Bump all versions one final time I hope.... ([#297](https://github.com/openedx/frontend-enterprise/issues/297)) ([3452d81](https://github.com/openedx/frontend-enterprise/commit/3452d810bad4b7292ce342ac96bec500809b532d))
* manully bump versions after failed automation run ([#301](https://github.com/openedx/frontend-enterprise/issues/301)) ([f1e8616](https://github.com/openedx/frontend-enterprise/commit/f1e8616996c46ffda1c7596be6fc323136ac34c2))
* missing space in search ([#333](https://github.com/openedx/frontend-enterprise/issues/333)) ([c604834](https://github.com/openedx/frontend-enterprise/commit/c604834d2efcfeba5d692e0f8dc7bb1681e72262))



## [4.1.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.1.5...@edx/frontend-enterprise-catalog-search@4.1.0) (2023-05-12)


### Features

* Add .npmrc file to more .gitignore files ([#303](https://github.com/openedx/frontend-enterprise/issues/303)) ([d890c21](https://github.com/openedx/frontend-enterprise/commit/d890c212c3f8c5ec81e6dee63f68029ad0b00552))
* adding exec ed compatibility to suggested search ([#288](https://github.com/openedx/frontend-enterprise/issues/288)) ([21d608c](https://github.com/openedx/frontend-enterprise/commit/21d608ce49b764e62101b5f696b463f6800ddcb0))
* upgraded to node v18, added .nvmrc and updated workflows ([#306](https://github.com/openedx/frontend-enterprise/issues/306)) ([0508783](https://github.com/openedx/frontend-enterprise/commit/050878307ff5f8a94385b7f41070dec19c7e84cc))


### Bug Fixes

* Bump all versions one final time I hope.... ([#297](https://github.com/openedx/frontend-enterprise/issues/297)) ([3452d81](https://github.com/openedx/frontend-enterprise/commit/3452d810bad4b7292ce342ac96bec500809b532d))
* manully bump versions after failed automation run ([#301](https://github.com/openedx/frontend-enterprise/issues/301)) ([f1e8616](https://github.com/openedx/frontend-enterprise/commit/f1e8616996c46ffda1c7596be6fc323136ac34c2))



## [4.0.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.1.5...@edx/frontend-enterprise-catalog-search@4.0.0) (2023-05-09)


### Features

* Add .npmrc file to more .gitignore files ([#303](https://github.com/openedx/frontend-enterprise/issues/303)) ([d890c21](https://github.com/openedx/frontend-enterprise/commit/d890c212c3f8c5ec81e6dee63f68029ad0b00552))
* upgraded to node v18, added .nvmrc and updated workflows ([#306](https://github.com/openedx/frontend-enterprise/issues/306)) ([0508783](https://github.com/openedx/frontend-enterprise/commit/050878307ff5f8a94385b7f41070dec19c7e84cc))


### Bug Fixes

* Bump all versions one final time I hope.... ([#297](https://github.com/openedx/frontend-enterprise/issues/297)) ([3452d81](https://github.com/openedx/frontend-enterprise/commit/3452d810bad4b7292ce342ac96bec500809b532d))
* manully bump versions after failed automation run ([#301](https://github.com/openedx/frontend-enterprise/issues/301)) ([f1e8616](https://github.com/openedx/frontend-enterprise/commit/f1e8616996c46ffda1c7596be6fc323136ac34c2))



## [3.3.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.1.5...@edx/frontend-enterprise-catalog-search@3.3.0) (2023-04-24)


### Features

* Add .npmrc file to more .gitignore files ([#303](https://github.com/openedx/frontend-enterprise/issues/303)) ([d890c21](https://github.com/openedx/frontend-enterprise/commit/d890c212c3f8c5ec81e6dee63f68029ad0b00552))


### Bug Fixes

* Bump all versions one final time I hope.... ([#297](https://github.com/openedx/frontend-enterprise/issues/297)) ([3452d81](https://github.com/openedx/frontend-enterprise/commit/3452d810bad4b7292ce342ac96bec500809b532d))
* manully bump versions after failed automation run ([#301](https://github.com/openedx/frontend-enterprise/issues/301)) ([f1e8616](https://github.com/openedx/frontend-enterprise/commit/f1e8616996c46ffda1c7596be6fc323136ac34c2))



## [3.2.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.1.5...@edx/frontend-enterprise-catalog-search@3.2.0) (2023-04-24)


### Features

* Add .npmrc file to more .gitignore files ([#303](https://github.com/openedx/frontend-enterprise/issues/303)) ([d890c21](https://github.com/openedx/frontend-enterprise/commit/d890c212c3f8c5ec81e6dee63f68029ad0b00552))


### Bug Fixes

* Bump all versions one final time I hope.... ([#297](https://github.com/openedx/frontend-enterprise/issues/297)) ([3452d81](https://github.com/openedx/frontend-enterprise/commit/3452d810bad4b7292ce342ac96bec500809b532d))
* manully bump versions after failed automation run ([#301](https://github.com/openedx/frontend-enterprise/issues/301)) ([f1e8616](https://github.com/openedx/frontend-enterprise/commit/f1e8616996c46ffda1c7596be6fc323136ac34c2))



### [3.1.9](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.1.5...@edx/frontend-enterprise-catalog-search@3.1.9) (2023-02-17)


### Bug Fixes

* Bump all versions one final time I hope.... ([#297](https://github.com/openedx/frontend-enterprise/issues/297)) ([3452d81](https://github.com/openedx/frontend-enterprise/commit/3452d810bad4b7292ce342ac96bec500809b532d))



### [3.1.7](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.1.5...@edx/frontend-enterprise-catalog-search@3.1.7) (2023-02-16)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





### [3.1.5](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.1.4...@edx/frontend-enterprise-catalog-search@3.1.5) (2022-12-06)


### Bug Fixes

* only apply bg-brand-primary to SearchHeader if variant=inverse ([#281](https://github.com/openedx/frontend-enterprise/issues/281)) ([7f77bfd](https://github.com/openedx/frontend-enterprise/commit/7f77bfda3c98374b28f95e650ce0b9e093053212))



### [3.1.4](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.1.3...@edx/frontend-enterprise-catalog-search@3.1.4) (2022-09-20)


### Bug Fixes

* hotfix for explore catalog issue ([#275](https://github.com/openedx/frontend-enterprise/issues/275)) ([74e88be](https://github.com/openedx/frontend-enterprise/commit/74e88bef518f8491230677798156078d13ec62df))



### [3.1.3](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.1.2...@edx/frontend-enterprise-catalog-search@3.1.3) (2022-08-24)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





### [3.1.2](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.1.1...@edx/frontend-enterprise-catalog-search@3.1.2) (2022-08-03)


### Bug Fixes

* small fix to dropdown toggle ([#269](https://github.com/openedx/frontend-enterprise/issues/269)) ([3a515c0](https://github.com/openedx/frontend-enterprise/commit/3a515c0e8db46e2e590bf3bd5e55cea81e0f2af1))



### 3.1.1 (2022-07-15)


### Bug Fixes

* search reset after checkbox click in dropdown ([#267](https://github.com/openedx/frontend-enterprise/issues/267)) ([eb1d15a](https://github.com/openedx/frontend-enterprise/commit/eb1d15a7acd86f06dcc8fb6ae14efc00f13e9778))



## [3.1.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.0.5...@edx/frontend-enterprise-catalog-search@3.1.0) (2022-06-22)


### Features

* add hotjar library ([#264](https://github.com/openedx/frontend-enterprise/issues/264)) ([f132ce1](https://github.com/openedx/frontend-enterprise/commit/f132ce1716bb64714a8c368a80f673d1e9ef12fc))



### [3.0.5](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.0.4...@edx/frontend-enterprise-catalog-search@3.0.5) (2022-06-17)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





### [3.0.4](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.0.3...@edx/frontend-enterprise-catalog-search@3.0.4) (2022-06-02)


### Bug Fixes

* update devDependencies in `utils` and `logistration`; add more docs to README ([#260](https://github.com/openedx/frontend-enterprise/issues/260)) ([db5204d](https://github.com/openedx/frontend-enterprise/commit/db5204dd417a57d4e20a66d5cc1fdfd5fee298cb))



### [3.0.3](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.0.2...@edx/frontend-enterprise-catalog-search@3.0.3) (2022-06-02)


### Bug Fixes

* Use media query to resize for mobile in SearchFilters ([#259](https://github.com/openedx/frontend-enterprise/issues/259)) ([6780f94](https://github.com/openedx/frontend-enterprise/commit/6780f94058badbf82b909430db209574698dd596))



### [3.0.2](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.0.1...@edx/frontend-enterprise-catalog-search@3.0.2) (2022-05-11)


### Bug Fixes

* switch SearchFilters to mobile menu when smaller than large bp. ENT-5800 ([#256](https://github.com/openedx/frontend-enterprise/issues/256)) ([65f5e10](https://github.com/openedx/frontend-enterprise/commit/65f5e10017133b0887bcd86cb61433522d7b962f))



### [3.0.1](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@3.0.0...@edx/frontend-enterprise-catalog-search@3.0.1) (2022-04-15)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





## [3.0.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.9.0...@edx/frontend-enterprise-catalog-search@3.0.0) (2022-04-14)


### ⚠ BREAKING CHANGES

* The Open edX platform is collectively moving towards Node 16. By doing so in this repository, we can now use NPM workspaces in place of Lerna in many places. Lerna is still used for publishing to NPM, updating CHANGELOGs and package.json files upon released. But NPM workspace commands can now be used instead of Lerna commands for the developer experience, which is more performant, easier to reason about, and natively supported by NPM.

* Node 16 upgrade and peer dependency cleanup (#250) ([d4e3caf](https://github.com/openedx/frontend-enterprise/commit/d4e3caf7e15a626f1c5e4b4d27f5e09c6f412120)), closes [#250](https://github.com/openedx/frontend-enterprise/issues/250)



## [2.9.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.8.0...@edx/frontend-enterprise-catalog-search@2.9.0) (2022-04-12)


### Features

* persistent facet filters ([#251](https://github.com/openedx/frontend-enterprise/issues/251)) ([c67fc7f](https://github.com/openedx/frontend-enterprise/commit/c67fc7ff950d757ba8f97b7b562ba0c86168a682))



## [2.8.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.7.0...@edx/frontend-enterprise-catalog-search@2.8.0) (2022-04-05)


### Features

* making suggested items backwards compatible and redirect func overridable ([#242](https://github.com/openedx/frontend-enterprise/issues/242)) ([01f284d](https://github.com/openedx/frontend-enterprise/commit/01f284d7999e046df2c6a395997ac410e92a5fdb))



## [2.7.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.6.1...@edx/frontend-enterprise-catalog-search@2.7.0) (2022-03-07)


### Features

* add learning type `Pathways` ([#237](https://github.com/openedx/frontend-enterprise/issues/237)) ([2641323](https://github.com/openedx/frontend-enterprise/commit/26413236489e2b256ae13f43a209dc9ba64ba264))



### [2.6.1](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.6.0...@edx/frontend-enterprise-catalog-search@2.6.1) (2022-03-03)


### Bug Fixes

* autocomplete defensive code fix ([#236](https://github.com/openedx/frontend-enterprise/issues/236)) ([c5653a4](https://github.com/openedx/frontend-enterprise/commit/c5653a4b0d1958d5d6ebe543a851a7c28ad4349b))



## [2.6.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.5.0...@edx/frontend-enterprise-catalog-search@2.6.0) (2022-02-23)


### Features

* add type ahead autocomplete suggestion support ([#215](https://github.com/openedx/frontend-enterprise/issues/215)) ([66d80f2](https://github.com/openedx/frontend-enterprise/commit/66d80f253922fe3494b26df36f63b720160d1ce2))



## [2.5.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.4.1...@edx/frontend-enterprise-catalog-search@2.5.0) (2022-01-24)


### Features

* add hasFeatureFlagEnabled util function ([#209](https://github.com/openedx/frontend-enterprise/issues/209)) ([9dca2e4](https://github.com/openedx/frontend-enterprise/commit/9dca2e41ea0b043d17356b4accb5e40c582a5b26))



### [2.4.1](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.4.0...@edx/frontend-enterprise-catalog-search@2.4.1) (2022-01-24)


### Bug Fixes

* remove query-string dependency ([#204](https://github.com/openedx/frontend-enterprise/issues/204)) ([b027561](https://github.com/openedx/frontend-enterprise/commit/b0275613e1eaa8ddc8bf233a906ddfb6becc858f))



## [2.4.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.3.0...@edx/frontend-enterprise-catalog-search@2.4.0) (2021-12-13)


### Features

* add functionality to hide searchbox header ([#194](https://github.com/openedx/frontend-enterprise/issues/194)) ([c56e3da](https://github.com/openedx/frontend-enterprise/commit/c56e3da34162a58202d4f34efa7b7542657e6616))



## [2.3.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.2.5...@edx/frontend-enterprise-catalog-search@2.3.0) (2021-12-09)


### Features

* support enterprise customer invite key in LoginRedirect ([#192](https://github.com/openedx/frontend-enterprise/issues/192)) ([9b8a200](https://github.com/openedx/frontend-enterprise/commit/9b8a200633d5fc665ed9faf79d10f43cb7a9386a))



### [2.2.5](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.2.4...@edx/frontend-enterprise-catalog-search@2.2.5) (2021-11-09)


### Bug Fixes

* Change the Search Box title to include programs ([#180](https://github.com/openedx/frontend-enterprise/issues/180)) ([ec450eb](https://github.com/openedx/frontend-enterprise/commit/ec450ebd7d028885d66cd0ed5ea9e22f28b521a9))



### [2.2.4](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.2.3...@edx/frontend-enterprise-catalog-search@2.2.4) (2021-11-03)


### Reverts

* Revert "fix: reverted changes to use program_title and now using program title instead of program title. (#181)" (#182) ([838300f](https://github.com/openedx/frontend-enterprise/commit/838300f38979c2d3920661182c956e4b70497625)), closes [#181](https://github.com/openedx/frontend-enterprise/issues/181) [#182](https://github.com/openedx/frontend-enterprise/issues/182)



### [2.2.3](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.2.2...@edx/frontend-enterprise-catalog-search@2.2.3) (2021-11-03)


### Bug Fixes

* reverted changes to use program_title and now using program title instead of program title. ([#181](https://github.com/openedx/frontend-enterprise/issues/181)) ([a812b88](https://github.com/openedx/frontend-enterprise/commit/a812b88971c62c41deac8e5e06d6170856295a98))



### [2.2.2](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.2.1...@edx/frontend-enterprise-catalog-search@2.2.2) (2021-11-03)


### Bug Fixes

* use shared browserslist configuration ([#179](https://github.com/openedx/frontend-enterprise/issues/179)) ([6ffebe5](https://github.com/openedx/frontend-enterprise/commit/6ffebe5ba490567c691eac978125eee530707556))



### [2.2.1](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.2.0...@edx/frontend-enterprise-catalog-search@2.2.1) (2021-10-29)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





## [2.2.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.1.2...@edx/frontend-enterprise-catalog-search@2.2.0) (2021-10-21)


### Features

* hide refinement tags with url param ([#175](https://github.com/openedx/frontend-enterprise/issues/175)) ([9d251a9](https://github.com/openedx/frontend-enterprise/commit/9d251a9bf638e3a85f7291337129be3c47dc25eb))



### [2.1.2](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.1.1...@edx/frontend-enterprise-catalog-search@2.1.2) (2021-10-14)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





### [2.1.1](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.1.0...@edx/frontend-enterprise-catalog-search@2.1.1) (2021-09-23)


### Bug Fixes

* show count on dropdown list items only when showBadge is true ([64f8aac](https://github.com/openedx/frontend-enterprise/commit/64f8aac7f655d8c8317438531e23c5bb7ff2da43))



## [2.1.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.0.7...@edx/frontend-enterprise-catalog-search@2.1.0) (2021-09-03)


### Features

* ENT4876: Added delete functionality in single-item refinement type ([#168](https://github.com/openedx/frontend-enterprise/issues/168)) ([49da3d6](https://github.com/openedx/frontend-enterprise/commit/49da3d6bf95e2a7e5e4110a5924ca972a8e384ea))



### [2.0.7](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.0.5...@edx/frontend-enterprise-catalog-search@2.0.7) (2021-09-01)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





### [2.0.6](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.0.5...@edx/frontend-enterprise-catalog-search@2.0.6) (2021-09-01)

### Bug Fixes

* update alignment in Facet dropdown items
* Badges were showing an unformatted '0' instead of 0 in badge form when result count was 0


### [2.0.5](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.0.4...@edx/frontend-enterprise-catalog-search@2.0.5) (2021-08-24)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





### [2.0.4](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.0.3...@edx/frontend-enterprise-catalog-search@2.0.4) (2021-08-18)


### Bug Fixes

* update Algolia link in catalog-search README ([#163](https://github.com/openedx/frontend-enterprise/issues/163)) ([2cfa8ca](https://github.com/openedx/frontend-enterprise/commit/2cfa8ca1cabcfad6c0733b764b9a78ed8921d464))



### [2.0.3](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.0.2...@edx/frontend-enterprise-catalog-search@2.0.3) (2021-08-17)


### Bug Fixes

* update readme to test lerna publishing ([#161](https://github.com/openedx/frontend-enterprise/issues/161)) ([fcb3357](https://github.com/openedx/frontend-enterprise/commit/fcb33570c8e270983ed2bc692c3283e63e16ce38))



### [2.0.2](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.0.1...@edx/frontend-enterprise-catalog-search@2.0.2) (2021-08-17)


### Bug Fixes

* update readme to test lerna publishing ([#160](https://github.com/openedx/frontend-enterprise/issues/160)) ([7ea3248](https://github.com/openedx/frontend-enterprise/commit/7ea3248171f22cd6db62f492377cc5deafda367c))



### [2.0.1](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@2.0.0...@edx/frontend-enterprise-catalog-search@2.0.1) (2021-08-17)


### Bug Fixes

* update readme heading ([#158](https://github.com/openedx/frontend-enterprise/issues/158)) ([81e9b61](https://github.com/openedx/frontend-enterprise/commit/81e9b615b40e818688af588881ef30971c860087))



## [2.0.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@1.0.0...@edx/frontend-enterprise-catalog-search@2.0.0) (2021-08-17)


### ⚠ BREAKING CHANGES

* `refinementsFromQueryParams` renamed to `refinements`

### Bug Fixes

* improved support for lists of attribute values in algolia facet filtering ([#145](https://github.com/openedx/frontend-enterprise/issues/145)) ([ef26cda](https://github.com/openedx/frontend-enterprise/commit/ef26cda0008a26f1c1073d74c11868064ee65004))



# [1.0.0](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.17...@edx/frontend-enterprise-catalog-search@1.0.0) (2021-08-17)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





## [0.1.17](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.16...@edx/frontend-enterprise-catalog-search@0.1.17) (2021-08-17)


### Bug Fixes

* update readme ([99705d5](https://github.com/openedx/frontend-enterprise/commit/99705d53082c54c493930f873bd4fbb0ab7dc52c))





## [0.1.16](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.15...@edx/frontend-enterprise-catalog-search@0.1.16) (2021-08-17)


### Bug Fixes

* update readme ([#153](https://github.com/openedx/frontend-enterprise/issues/153)) ([73b087a](https://github.com/openedx/frontend-enterprise/commit/73b087a8fbfddf5bea131664fffdae21cb64b265))





## [0.1.15](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.14...@edx/frontend-enterprise-catalog-search@0.1.15) (2021-08-17)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





## [0.1.14](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.13...@edx/frontend-enterprise-catalog-search@0.1.14) (2021-08-16)


### Bug Fixes

* Updated FacetListBase to save list of selected item even for single-item facetValueType ([#147](https://github.com/openedx/frontend-enterprise/issues/147)) ([95da33c](https://github.com/openedx/frontend-enterprise/commit/95da33c2decf9133be36363ed01c9dc18b96b08f))





## [0.1.13](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.12...@edx/frontend-enterprise-catalog-search@0.1.13) (2021-08-05)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





## [0.1.12](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.12...@edx/frontend-enterprise-catalog-search@0.1.12) (2021-08-05)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





## [0.1.11](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.10...@edx/frontend-enterprise-catalog-search@0.1.11) (2021-06-09)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





## [0.1.10](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.9...@edx/frontend-enterprise-catalog-search@0.1.10) (2021-05-20)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





## [0.1.9](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.8...@edx/frontend-enterprise-catalog-search@0.1.9) (2021-05-20)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





## [0.1.8](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.7...@edx/frontend-enterprise-catalog-search@0.1.8) (2021-05-14)


### Bug Fixes

* add hotjar to searchbox ([ad9f087](https://github.com/openedx/frontend-enterprise/commit/ad9f087a09ac7831676f63d66391973d2a0e4432))





## [0.1.7](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.6...@edx/frontend-enterprise-catalog-search@0.1.7) (2021-05-11)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





## [0.1.6](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.4...@edx/frontend-enterprise-catalog-search@0.1.6) (2021-05-10)


### Bug Fixes

* run lerna commands for all packages regardless of whether they changed in release.yml ([#109](https://github.com/openedx/frontend-enterprise/issues/109)) ([608b1fb](https://github.com/openedx/frontend-enterprise/commit/608b1fb4c3b5343f05ef994436dbbd2418668e17))
* update publishing behavior and add additional docs ([#104](https://github.com/openedx/frontend-enterprise/issues/104)) ([525c430](https://github.com/openedx/frontend-enterprise/commit/525c430d5027e4514a27edccfed3d6ed4ddae091))





## [0.1.5](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.4...@edx/frontend-enterprise-catalog-search@0.1.5) (2021-05-10)


### Bug Fixes

* run lerna commands for all packages regardless of whether they changed in release.yml ([#109](https://github.com/openedx/frontend-enterprise/issues/109)) ([608b1fb](https://github.com/openedx/frontend-enterprise/commit/608b1fb4c3b5343f05ef994436dbbd2418668e17))
* update publishing behavior and add additional docs ([#104](https://github.com/openedx/frontend-enterprise/issues/104)) ([525c430](https://github.com/openedx/frontend-enterprise/commit/525c430d5027e4514a27edccfed3d6ed4ddae091))





## [0.1.4](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.3...@edx/frontend-enterprise-catalog-search@0.1.4) (2021-05-08)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





## [0.1.3](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.2...@edx/frontend-enterprise-catalog-search@0.1.3) (2021-05-07)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





## [0.1.2](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.1...@edx/frontend-enterprise-catalog-search@0.1.2) (2021-05-07)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





## [0.1.1](https://github.com/openedx/frontend-enterprise/compare/@edx/frontend-enterprise-catalog-search@0.1.0...@edx/frontend-enterprise-catalog-search@0.1.1) (2021-05-07)

**Note:** Version bump only for package @edx/frontend-enterprise-catalog-search





# 0.1.0 (2021-05-06)


* refactor!: separate components into npm packages in monorepo; add logistration-redirect (#97) ([3e2a3ac](https://github.com/openedx/frontend-enterprise/commit/3e2a3acf327211ed82415e8052d008bd1fdd2e33)), closes [#97](https://github.com/openedx/frontend-enterprise/issues/97)


### BREAKING CHANGES

* refactor to split ui components into separate packages using Lerna
