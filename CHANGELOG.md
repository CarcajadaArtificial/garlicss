# Changelog

## `v0.1.15`

### Changed names of `-auto-css` variables.
  - `src/grid.scss`
  - `src/media-queries.scss`

### Emptied the playground
  - `test/playground/index.html`
  - `test/playground/index.scss`

### Added index forwarding
  - `index.scss`

## Goals for `v0.2.0` - Flexible Grids
  - [x] README.md with:
    - [x] Introduction
    - [x] Setup Instructions
  - [ ] CONTRIBUTING.md with:
    - [x] Introduction
    - [x] Running the project
    - [ ] Updating the docs
    - [ ] Write good comments
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
      - Automatically creates the classes based on the greates number of cols in grid-schema.
      - `layout-empty` schema
    - [x] Add documentation.
    - [ ] Add unit tests.

### Goals for `v0.3.0` - Color Palettes
  - [ ] README.md with:
    - [ ] Features
  - [ ] CONTRIBUTING.md with:
    - [ ] Unit testing guide
    - [ ] Making pull requests
    - [ ] Adding content to CHANGELOG.md
    - [ ] Using the playground
  - [ ] A color palette engine