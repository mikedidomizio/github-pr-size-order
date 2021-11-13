# GitHub Pull Request Size Order

Returns a list of pull requests from a repository in order of size

## Requirements

- Node 14+
- GitHub personal access token with the `repo` scope

## Quick Start

`$ export GITHUB_TOKEN={MY_PERSONAL_ACCESS_TOKEN}`

`$ npm install && node ./src/index.js OWNER REPO`

example:

`$ node src/index.js mikedidomizio github-pr-size-order`