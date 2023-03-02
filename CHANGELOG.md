# Changelog

## `v0.0.11`

### Added `True` DevDependency for unit testing.
  - `test/index.js`
  - `test/index.scss`
  - `test/media-queries.test.scss`

### Added `pretty-package-json` to format the project json.
  - `package.json`

### Removed True submodule in favor of full node backend.
  - `.gitmodules`
  - `lib/true`
  - `package.json`

## Goals for `v0.1.0` - Media Queries
  - Create a breakpoint map.
  - Mixin that targets a specific breakpoint block.
  - Mixin that targets all screens lower/higher than a breakpoint.
  - Mixin that targets alls creens between two breakpoints.
  - Implement guidelines to the config.scss where the user customizes its nap.