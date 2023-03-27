# Changelog

## `v0.1.6`

### Changed the `media-query` feature to produce strings instead of media queries directly.
  - `/src/media-queries.scss`
  - `/test/media-queries.test.scss`

## Goals for `v0.2.0` - Flexible Grids
  - [ ] README.md with:
    - [ ] Introduction
    - [ ] Setup Instructions
    - [ ] Features
  - [ ] Grid System that:
    - [ ] Has configurable default variables.
      - Basic unit
      - A map with the grid schema
      - A map with grid layouts and breakpoints
    - [ ] Mixin that creates the layout classes based on the grid layout map.