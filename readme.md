## Copia band website source.
[copiaband.com]

Two page site that also incorporates and feeds in bandsintown data using fetch API.

For development tools and building:

1. Install the latest [Node.js and NPM](https://nodejs.org).
2. Install the latest [Yarn](https://yarnpkg.com/en/docs/install).
3. Copy .env.example to .env. `cp .env.example .env`. Port is set to 8989 in .env.example. Set `SITE_PORT=8989` to other port if required.
3. Run `yarn install` within the project root directory in Terminal.
4. Run `yarn run build:watch`.
5. Run `yarn run start:watch` in another tab. Tada!

## Scripts

Command                | Purpose
:--------------------- | :----------------------------------------------
`yarn run init`        | Remove Barebones examples and references.
`yarn run lint:js`     | Lint JS (see `eslintConfig` in `package.json`).
`yarn run lint:js:fix` | Lint JS and automatically fix issues.
`yarn run lint:css`    | Lint CSS (see `stylelint` in `package.json`).
`yarn run clean`       | Delete `/bundle`.
`yarn run build`       | Compile JS and CSS to `/bundle`.
`yarn run build:watch` | Build, rebuilding on source file changes.
`yarn run start`       | Start nodejs server.js
`yarn run start:watch` | Start nodejs server and monitor for changes (nodemon)
`yarn run package`     | Packages up the server.

Built with:
# ![Barebones](http://jaydenseric.com/shared/barebones-logo.svg)
