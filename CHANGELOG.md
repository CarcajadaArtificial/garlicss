# Changelog

## `v0.2.7`

- Added the function `color-get-luminance()`, and its auxiliary `_luminance-index()`.
- Added `hex-base-text` color to the theme.
- Added type checks to various functions.
- Added `color-compare-contrast()`.
- Updated `color-list-reduce()` to only return one value instead of a list of size `$n`.
- Updated `color-list-sort()` to have an `$ascending` parameter.
- Removed `sass-fairy` dependency.

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
