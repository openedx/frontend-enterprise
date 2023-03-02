**Merge checklist:**
- [ ] Evaluate how your changes will impact existing consumers (e.g., `frontend-app-learner-portal-enterprise`, `frontend-app-admin-portal`, and `frontend-app-enterprise-public-catalog`). Will consumers safely be able to upgrade to this change without any breaking changes?
- [ ] Ensure your commit message follows the semantic-release conventional commit message format. If your changes include a breaking change, ensure your commit message is explicitly marked as a `BREAKING CHANGE` so the NPM package is released as such.
- [ ] Once CI is passing, verify the package versions that Lerna will increment to in the Github Action CI workflow logs.
    - *Note*: This may be found in the "Preview Updated Versions (dry run)" step in the Github Action CI workflow logs.

**Post merge:**
- [ ] Verify Lerna created a release commit (e.g., ``chore(release): publish``) that incremented versions in relevant package.json and CHANGELOG files, and created [Git tags](https://github.com/openedx/frontend-enterprise/tags) for those versions.
- [ ] Run the ``Publish from package.json`` Github Action [workflow](https://github.com/openedx/frontend-enterprise/actions/workflows/publish-from-package.yml) to publish these new package versions to NPM.
    - This may be triggered by clicking the "Run workflow" option for the ``master`` branch.
- [ ] Verify the new package versions were published to NPM (i.e., ``npm view <package_name> versions --json``).
    - *Note*: There may be a slight delay between when the workflow finished and when NPM reports the package version as being published. If it doesn't appear right away in the above command, try again in a few minutes.
