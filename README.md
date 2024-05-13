# WoWSim core

This repository uses [Turborepo](https://turbo.build/repo/docs) to dev/build.

## Command
`npm run build`
Runs build command to compile a static version of the Styleguide

`npm run dev`
Starts the Storybook instance

`npm run (ui | ssets | styleguide)`
Shorthand for executing `npm run` inside a specific workspace.
Example: `npm run ui install packageName` will install `packageName` in the `@wowsims/ui` workspace.

`npm run type-check`
Runs TypeScript checker through all workspaces

`npm run lint(:fix)`
Runs `lint` or `lint:fix` through all workspaces

`npm run format`
Runs Prettier through all workspaces