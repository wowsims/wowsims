# WoWSim core

This repository uses [Turborepo](https://turbo.build/repo/docs) to dev/build.

## Local development

### Static components
If you wish to develop the static components you can use Storybook.

`npm run build` 

### Within WoWSims
If you wish to use this repository locally within your local WowSims repo you will have to link all the packages.

Example to create links for all current packages
```
npm link && \
cd packages/assets && npm link && cd ../.. && \
cd packages/config && npm link && cd ../.. && \
cd packages/constants && npm link && cd ../.. && \
cd packages/ui && npm link && cd ../..
```

in your wowsims-{expansion} repository you now do the following:
```
npm link @wowsims/assets @wowsims/config @wowsims/constants @wowsims/core @wowsims/ui
```
_This will link all your local wowsims core packages to the repository_

## Commands
`npm run build`

Runs build command to compile a static version of the Styleguide

---

`npm run dev`

Starts the Storybook instance to develop the UI

---

`npm run (ui | ssets | styleguide)`

Shorthand for executing `npm run` inside a specific workspace.
Example: `npm run ui install packageName` will install `packageName` in the `@wowsims/ui` workspace.

---

`npm run type-check`

Runs TypeScript checker through all workspaces

---

`npm run lint(:fix)`

Runs `lint` or `lint:fix` through all workspaces

---

`npm run format`

Runs Prettier through all workspaces