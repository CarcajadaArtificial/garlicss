# GarliCSS 🧄
Hello ``( ´ ω ` )ノﾞ`` thanks a lot for being interested in this project. I really like CSS, but love SCSS; that's why I created these handy engines for different UI utilities like media queries, grids, color palettes, animations, and much more. **Warning!! The following text contains opinionated features that will not align with everyone's needs, but, just listen and you'll see my point and maybe... even agree and like what I've done.**

[Read the docs](https://carcajadaartificial.github.io/garlicss/)

## Setup
Firstly, why isn't there a good module manager for SCSS modules?  People see SCSS as mere creators of single (or a bunch of) CSS files. But I think that inside SCSS there is the potential for engines for complex features, like error handling, unit testing, automatic documentation, or even more amazing things. (Shoutout to Oddbird's fabulous tools and team.)

### Node
What alternative do SCSS developers have for importing modules? Using NPM and Node to manage our scss module and import it from `node_modules`.
```bash
npm install garlicss -D
```

### Git Submodules
Now If you're using anything different from NPM and wish to use this module, what options do you have? Well, you can create a subdirectory like `lib/scss/garlicss` and create a node project there where you can import and update it. But man, in general, I dislike having `node_modules` everywhere and I feel it is unnecessary to install a whole node server just for SCSS compilation. So I advise importing this repo as a git submodule. This way, you can have an easily updated clone of this repo inside your project so you can build your own design systems.
```bash
git submodule add https://github.com/CarcajadaArtificial/garlicss.git path/to/garlicss
```

## Features
*Coming soon*

### Media Queries

Media queries are essential to web development. This module facilitates faster and more consistent production of various types of queries. These functions simply provide shorthands for existing practices, making them easier to remember. While it has become the norm to have few breakpoints thanks to the latest updates in popular frameworks, some projects require up to a dozen breakpoints due to specific requirements to be compatible with as many devices as possible. Therefore, there are functions that assist in both scenarios without impacting the resulting size of the generated CSS files.

The logic behind the module's design is that media queries should be 'constructed' at the end of their creation process. Before that, having media queries as strings offers several benefits. Queries can be stored, ordered, iterated, and modified before being added to the `@media` at-rule. For this reason, most of the work is performed by functions that return strings and maps containing the resulting strings. The only exception is the `media()` mixin. Why not simply write `@media ... {}` instead of using a mixin that requires more characters? Well, an interpolation block is necessary because function calls that return a string require it (`@media fn()` does not work, while `@media #{fn()}` does). Although the media mixin itself is not a shorthand (`@include media()` uses 16 characters, while `@media #{}` uses 10), when used in conjunction with the other functions in the module, the code gains meaning, readability, and saves characters.

#### Generic queries
The intended use of this module is to store all the project's breakpoints in a map, but it is flexible enough to allow for quick static queries. The `query()` function is the module's generic media query generator. It is the only function that does not depend on a map of breakpoints.

```scss
// This
@include media(query($from: 40em, $until: 100em)) {}
// Compiles to this:
@media screen and (min-width: 40em) and (max-width: 99.9375em) {}
```

There are three noticeable design principles in this feature:
1. Opting for "em" instead of "px" in CSS media queries stems from the need for responsive and flexible design that adapts to various devices and user preferences. Using "em" allows the design to scale based on the user's chosen font size, accommodating individuals with different visual needs and providing a more inclusive experience.
2. The "screen" query is always added by default. This is because I believe that printed styles should be excluded. To change it to "all", set `$query-screen` to false.
3. The value of 100em has one sixteenth of an em (1px) subtracted. This is because the value of `$until` is expected to be the beginning of the next media query breakpoint. The subtracted value can be changed using the variable `$until-subtracted-amount`.

#### Breakpoint map functions
The next step is to have a breakpoint map, which is a list of breakpoints required for the project's design. It should look something like this:

```scss
$breakpoints: (
  sm: 0em,
  md: 40em,
  lg: 100em,
);
```

- only-on *Coming soon*
- larger/smaller-than *Coming soon*
- between *Coming soon*
- query-map and build-queries *Coming soon*

### Grid System
*Coming soon*

### Color Palettes
*Coming soon*

