# Changelog

## `v0.2.12`

- `/src/_grid.scss`
  - Added the configuration variables `$class-name-grid` and `$class-name-layout`.
  - Added the feature of `$use-classes` to `build-all-layouts()`.
  - Added the `build-layout()` mixin.
  - Added a few `@todo`s.
- Renabled the complete layout schema. `/src/default/_grid.default.scss`
- Added few `@todo`s. `/src/_color.scss`

- Minor updates
  - `/dist/style.css`
  - `/dist/style.min.css`
  - `/src/default/index.scss`
  - `/test/playground/index.html`

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
