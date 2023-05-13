# Changelog

## `v0.2.22`

- Removed `x()` and `layout-unit`
  - `/src/_grid.scss`
  - `/src/default/_grid.default.scss`

- Simplified reset code
  - `/src/default/_reset.default.scss`

- Minor updates
  - `/dist/style.css`
  - `/dist/style.min.css`
  - `/src/_size.scss`

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
    - [x] Generation of themes
      - [x] Adaptability to dark mode.
  - [x] Fixes
    - [x] Fix `<button disabled />` case.
    - [x] Fix grid layouts in mobile.
    - [x] Fix button sizes.
    - [x] Fix input types date and time height.
    - [x] Fix input types file, range, and color.
    - [x] Fix missing select and textarea elements.
