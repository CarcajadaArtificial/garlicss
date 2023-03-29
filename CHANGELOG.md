# Changelog

## `v0.1.21`

### Added the `sass-door` dependency
  - `package.json`
  - `lib/sass-door.scss`

### Updated error handling to sass-door
  - `src/grid.scss`
  - `src/media-queries.scss`
  - `src/utils.scss`
  - `test/media-queries.test.scss`
  - `test/utils.test.scss`

### Minor updates
  - `README.md`

## Goals for `v0.2.0` - Flexible Grids
  - [x] README.md with:
    - [x] Introduction
    - [x] Setup Instructions
  - [x] CONTRIBUTING.md with:
    - [x] Introduction
    - [x] Running the project
    - [x] Updating the docs
  - [x] Media Query System that:
    - [x] A variable containing a list of common media queries.
    - [x] Mixin that creates utility classes for the common media query variable.
  - [x] Grid System that:
    - [x] Has configurable default variables.
      - Basic unit
      - A map with the grid schema
      - A map with grid layouts and breakpoints
    - [x] Mixin that creates the grid class based on the grid schema map.
    - [x] Mixin that creates the layout classes based on the layout map.
    - [ ] Mixin that creates utility classes for fully custom grid modules.
      - `layout-module-$span`
      - Automatically creates the classes based on the greatest number of cols in grid-schema.
    - [x] `layout-empty` schema
    - [x] Add documentation.
    - [x] Add unit tests.
      - [x] Utils
      - [x] Grid
    - [x] Make all test modules import from `index.scss` instead of individual modules.

### Goals for `v0.3.0` - Color Palettes
  - [ ] README.md with:
    - [ ] Features
  - [ ] CONTRIBUTING.md with:
    - [ ] Unit testing guide
    - [ ] Making pull requests
    - [ ] Adding content to CHANGELOG.md
    - [ ] Using the playground
  - [ ] A color palette engine