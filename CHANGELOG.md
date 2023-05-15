# Changelog

## `v0.2.28`

- `/test/playground/index.html`
 - Added documentation paragraphs.
 - Reordered page elements.

- Removed `--clr-border` from palette. There are no borders.
  - `/src/_color.scss`

- Added CSS Variables automatic display.
  - `/test/playground/index.html`
  - `/test/playground/index.scss`
  - `/test/playground/script.js`

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
  - [x] Fixes
    - [x] Fix `<button disabled />` case.
    - [x] Fix grid layouts in mobile.
    - [x] Fix button sizes.
    - [x] Fix input types date and time height.
    - [x] Fix input types file, range, and color.
    - [x] Fix missing select and textarea elements.

## Goals for `v0.4.0` - Animation
  - Features
    - [ ] Hover animations for inputs, buttons and links.
    - [ ] Generation of gradients
    - [ ] Hover color for links, inputs and buttons.
  - Missing configurations
    - [ ] Configure what text element will have what step of the modular scale set to its size.
    - [ ] Configure what text color will be applied to every element.