Resolving publishing issues with Lerna
################################

In setting up the Lerna monorepo, there was a moment when the ``lerna publish`` command had successfully created git tags and commited a "chore: publish" commit for a new release, but failed to publish that new release to NPM.

The result of this publishing failure was that the Git repository was in a state as if the release had been published, without the same, matching version existing on the NPM registry. This document serves as a starting point to resolve that situation.

In the scenario where Git tags and a "chore: publish" commit were created for a new release without that release actually being published to NPM, you may `temporarily modify the release.yml Github Action workflow file <https://github.com/edx/frontend-enterprise/blob/master/.github/workflows/release.yml#L40>`_ to run the following command instead of the default ``lerna publish``:

::

  lerna publish from-package --yes

By including the ``from-package`` option, Lerna will determine the package version to publish based on the existing version noted in the package.json files of each package in the monorepo.

See the `official Lerna documentation <https://github.com/lerna/lerna/tree/main/commands/publish#readme>`_ for more details.

Be sure to remember to change the ``release.yml`` back to its original state once the published NPM package(s) are back in a good state with matching and correct versions.
