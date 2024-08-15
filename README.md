# Introduction

This is a minimum reproduction library for a bug on [Nx Release](https://github.com/nrwl/nx/issues/26041#issuecomment-2284843257).

## Recreating the bug

1. Run `yarn nx release version --first-release --dry-run` to see the initial release
2. Create an arbitrary commit on `scope-1/package-a` tagged as a `feat:`. In my case, I just added a space to the package.json
3. Re-run `yarn nx release version --first-release --dry-run` and see that `scope-2/package-b` has incremented, with the message `Resolved the specifier as "patch" because "release.version.generatorOptions.updateDependents" is enabled` despite `updateDependents` being set to `never`