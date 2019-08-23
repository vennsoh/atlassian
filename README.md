# atlaskit-framer

This project illustrates a CI workflow which publishes new versions of Framer X projects if one of their dependant packages has changed. It is intended to be used to target yarn packages that are prefixed with a specified namespace. This ensures every Framer project that depends on a production component is updated and published any time the corresponding package has changed.

## Structure

This project contains Framer X projects that are a wrapper around their production counterpart. Each project contains the minimum amount of abstraction needed to include a production React component within a Framer project as well as some property controls for more intuitive usage from the canvas.

## Usage

#### Environment Variables

You should set the following environment variables within your CircleCI project:

| Name                          | Value             | Description                                                                                      |
| ----------------------------- | ----------------- | ------------------------------------------------------------------------------------------------ |
| `PACKAGE_NAMESPACES`          | `@atlaskit`       | Comma separated list of namespaces of packages to target                                         |
| `FRAMER_TOKEN`                | `<token>`         | Authentication token for publishing/updating the package in the Team Store                       |
| `CI_GIT_USER_EMAIL`           | `ci@domain.com`   | Email that will be used when the CI makes a commit to update package versions                    |
| `CI_GIT_USER_NAME`            | `CI`              | User name that will be used when the CI makes a commit to update package versions                |
| `CI_GIT_USER_KEY_FINGERPRINT` | `61:27:7e...`     | Git user key fingerprint that will be used when the CI makes a commit to update package versions |

To get a `FRAMER_TOKEN`, run `npx framer-cli authenticate <email@address>` and verify with your email. Read [the docs](https://www.npmjs.com/package/framer-cli) for using the `framer-cli` for more information.

### CircleCI Configuration
#### config.yml
Within the `.circleci` directory is a sample configuration which can be included within an existing CircleCI configuration. It contains a single job `build-and-publish` which can be triggered on interval using a workflow (example hourly workflow included with this repo).

#### Git User Key
As the CI will need to make commits back to your repository, you'll need to generate a Git User Key that grants read/write access to your repository, as the automatically generated key when you link your Git project to CircleCI only grants read permissions. CircleCI has posted docs [here](https://circleci.com/docs/2.0/gh-bb-integration/#creating-a-github-user-key) which outline how this should work. There's also environment variables defined above which specify what email/name the changes from the CI will be committed under.

### Local Files in Repository
You should include `./bin/publish-updated-projects.sh` and `./bin/yarn-lock-diff.js` within your repository. If you get the error `./bin/publish-updated-projects.sh: No such file or directory` ensure the shell script has execution permissions.

### Steps
- Every time the `build-and-publish` job is run the dependencies of each `.framerfx` project within the repository will be checked. 
- If any package which has a name that matches one of the configured namespaces has been updated, the Framer project will be published (this also works for packages that use `latest` as the version in `package.json`).
- If any Framer project is published, the CI will then make a commit back to the master branch that reflects the updated yarn.lock files.

### Todo
- More descriptive commit messages when projects have been published
- Log updated package versions (`@atlaskit/avatar 1.0.0 - 1.0.1`)
