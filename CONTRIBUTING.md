# Contributing

``Hello ( ´ ω ` )ノﾞ`` and welcome to the contributions guide. There are two possibilities for who is reading this. Either you are my future self that forgot how to do something and came to remember, or you are another developer interested in adding something to the project. Man, I hope is the second one.

## NPM Scripts

### Building the project
The build step in the project means constructing the  `styles.css` using the default settings inside `~/index.scss`.
```shell
npm run build
```

### Publishing the project
This command publishes the current version to the NPM and updates the doc site. Before running, this version must be ready to be published with: All changes tested and documented, the playground cleaned, all temporal changes must be removed, and the main markdowns must be updated if needed. **Always before publishing, make sure the gitignore file is manually updated.** It is conformed by this series of subcommands: 

1. `npm publish` - This will require my authentication until proper DevOps are implemented.
2. `git checkout docs; git merge main --strategy-option ours` - Move to the docs branch and update branch to the latest changes in main.
3. `npm run doc` - Run the sassdoc command to update the docs site.
4. `git add .; git commit -m "Auto-update docs site"; git push` - Push the updated site.
5. `git checkout main` - Return to the main branch.
```shell
npm run publish
```

### Running the automatic documentation.
This command can be run to test the doc site before updating it. It is also run ding the `npm run publish` command.
```shell
npm run doc
```

### `npm run play`
*Coming soon*

### `npm run test`
*Coming soon*

## Writing scss comments
*Coming soon*

## Writing in the changelog 
*Coming soon*