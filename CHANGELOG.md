# Changelog

## `v0.2.45`

- Added SCSS basics submodule
  - `/src/_basics.scss`
  - `/src/index.scss`

- Updated lib forwarding to a scss file inside src
  - `/src/lib/sassdoor.scss`
  - `/src/_color.scss`
  - `/src/_grid.scss`
  - `/src/_media-queries.scss`
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
  - [x] A color palette engine
    - [x] Generation of classes and css variables.
    - [x] Generation of themes
      - [x] Adaptability to dark mode.
  - [ ] To-dos
    - [x] (0) media-queries
    - [ ] (12) grid
    - [ ] (12) color
    - [ ] (5) size
  - Media queries
    - [x] Configurable `screen` as a boolean variable.
    - [x] Basic media query builders that recive static em values instead of using the breakpoint-map.
  - [x] Fixes
    - [x] Fix `<button disabled />` case.
    - [x] Fix grid layouts in mobile.
    - [x] Fix button sizes.
    - [x] Fix input types date and time height.
    - [x] Fix input types file, range, and color.
    - [x] Fix missing select and textarea elements.
    - [x] Fix `_reset.scss` structure, move functions to their own files. (remove `build-basic-styles`)
  - [ ] Playground
    - [ ] Error message mini-component.
    - [x] Headings with id's.
    - [ ] Document multiplicative sizes.

## Goals for `v0.4.0` - Animation
  - Features
    - [ ] Hover animations for inputs, buttons and links.
    - [ ] Generation of gradients
    - [ ] Hover color for links, inputs and buttons.
  - Missing configurations
    - [ ] Configure what text element will have what step of the modular scale set to its size.
    - [ ] Configure what text color will be applied to every element.

## The future?
  - [ ] Useful font mixins and functions. Importing, applying, verifying and managing.