# Changelog

## `v0.3.1`

### Added the download script
  - `/index.js`

### Minor updates
  - `/package.json`
  - `/.gitignore`
  - `/src/lib/sassdoor.scss`

## Goals for `v0.3.0` - Color Palettes
  - [x] Generate compressed css for build
  - [x] A color palette engine
    - [x] Generation of classes and css variables.
    - [x] Generation of themes
      - [x] Adaptability to dark mode.
  - [x] To-dos
    - [x] (0) media-queries
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
  - [x] Playground
    - [x] Headings with id's.

## Goals for `v0.4.0` - Animation
  - [x] Implement node file download using jsdelivr.
    - [x] Remove all traces of the sassdoor subtree.
    - [x] Develop the js script.
  - [ ] Features
    - [x] Generation of gradients.
    - [ ] Transition animations.
    - [ ] Element states (hover, focus, etc.)
  - [ ] README.md with:
    - [ ] Features
  - [ ] CONTRIBUTING.md with:
    - [ ] Unit testing guide
    - [ ] Making pull requests
    - [ ] Adding content to CHANGELOG.md
    - [ ] Using the playground
  - [ ] Playground
    - [ ] Error message mini-component.
    - [ ] Document multiplicative sizes
  - [ ] To-dos
    - [ ] (12) grid
    - [ ] (12) color
    - [ ] (5) size

## The future?
  - [ ] Useful font mixins and functions. Importing, applying, verifying and managing.
  - Missing configurations
    - [ ] Configure what text element will have what step of the modular scale set to its size.
    - [ ] Configure what text color will be applied to every element.