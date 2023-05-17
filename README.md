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
Media queries are quintessential to web development. This module aids on faster and more consistent production of queries of any kind. All this functions do is present shorthands for existing practices, making them easier to remember. Even though now it has become the norm to have few breakpoints thanks to the work of the latest update in popular frameworks, some projects require up to a dozen breakpoints due to the narrow specificity of requirements to be compatible with as most devices as possible. It is because of this that there are some functions that aid in both schemes without affecting in the resulting size of the generated CSS files.

The logic behind the module's design is that media queries should be 'built' at the very end of their creation process, before this, having media queries be strings has a series of benefits. Queries can be stored, ordered, iterated and modified before being added to the media at-rule (`@media`). It is because of this that most work is done by functions that return strings, and maps containing the resulting strings. The only exception is the `media()` mixin. Why not simply write `@media ... {}` instead of using a mixin that uses more characters? Well, because a interpolation block is necesary, function calls that return a string require it (`@media fn()` does not work while `@media #{fn()}` does). Even though that by itself, the `media` mixin is not a shorthand (`@include media()` uses 16 characters and `@media #{}` uses 10), when using the rest of the functions in the module, the code gains meaning, readability and a save in characters.

#### Generic queries
This module's intended use is to store all the project's breakpoints in a map, but it is flexible enough to allow quick static queries. The `query()` function is the module's generic media query producer. It is the only function that does not depend on a map of breakpoints.

```scss
// This
@include media(query($from: 40em, $until: 100em)) {}
// Compiles to this:
@media screen and (min-width: 40em) and (max-width: 99.9375em) {}
```

There are three noticable design principles in this feature:
  1. Opting for "em" instead of "px" in CSS media queries stems from the need for responsive and flexible design that adapts to various devices and user preferences. Using "em" allows the design to scale based on the user's chosen font size, accommodating individuals with different visual needs and providing a more inclusive experience.
  2. The query `screen` is always added by default. This is because I believe that printed styles must be excluded. To change it to `all`, set `$query-screen` to false.
  3. How the value of `100em` has one sixteenth of an em (1px) substracted. This is because the value of `$until` is expected to be the beginning of the next media query. The substracted value can be changed using the variable `$until-substracted-amount`.

#### Breakpoint map functions
The next step forward is having a breakpoint map, this is the list of breakpoints that are required in the project's design. It should look something like this:

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

