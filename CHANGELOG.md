# Changelog

## `v0.2.14`

- `/src/_color.scss`
  - Added the `color-get-contrast` and `color-compare-contrast` functions.
  - Updated the `color-list-reduce` and `color-list-sort` functions to support spread parameters.

- Added the `build-basic-styles` mixin. `/src/_reset.scss`

- Updated Playground
  - `/test/playground/index.scss`
  - `/test/playground/index.html`

- Minor updates
  - `/dist/style.css`
  - `/dist/style.min.css`
  - `/src/default/index.scss`

## Goals for `v0.3.0` - Color Palettes
  - [x] Generate compressed css for build
  - [ ] README.md with:
    - [ ] Features
  - [ ] CONTRIBUTING.md with:
    - [ ] Unit testing guide
    - [ ] Making pull requests
    - [ ] Adding content to CHANGELOG.md
    - [ ] Using the playground
  - [ ] A color palette engine
    - [x] Generation of classes and css variables.
    - [ ] Generation of gradients
    - [ ] Generation of themes
      - [ ] Adaptability to dark mode.
