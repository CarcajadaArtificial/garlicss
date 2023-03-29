# GarliCSS 🧄
``Hello ( ´ ω ` )ノﾞ`` thanks a lot for being interested in this library. I really like CSS, but love SCSS; that's why I created these handy engines for different UI utilities like media queries, grids, color palettes, animations, and much more. **Warning!! The following text contains opinionated features that will not align with everyone's needs, but, just listen and you'll see my point and maybe... even agree and like what I've done.**

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
*Coming soon*

### Grid System
*Coming soon*

### Color Palettes
*Coming soon*

