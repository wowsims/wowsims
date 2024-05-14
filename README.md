# WoWSim core

This repository uses [Turborepo](https://turbo.build/repo/docs) to dev/build.

## Local development

### Static components

If you wish to develop the static components you can use Storybook.

`yarn build`

### Within WoWSims

If you wish to use this repository locally within your local WowSims repo you will have to link all the packages in your wowsims-{expansion} repository:

````
yarn link ../{wowsims-repository} -p -A -r```
_This will link all your local wowsims core packages to the repository_

## Commands
`yarn build`

Runs build command to compile a static version of the Styleguide

---

`yarn dev`

Starts the Storybook instance to develop the UI

---

`yarn (ui | ssets | styleguide)`

Shorthand for executing `yarn` inside a specific workspace.
Example: `yarn ui install packageName` will install `packageName` in the `@wowsims/ui` workspace.

---

`yarn type-check`

Runs TypeScript checker through all workspaces

---

`yarn lint(:fix)`

Runs `lint` or `lint:fix` through all workspaces

---

`yarn format`

Runs Prettier through all workspaces
````
