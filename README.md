# ![markuplint](https://cdn.rawgit.com/YusukeHirao/markuplint/HEAD/media/logo-v.svg)

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)
[![Build Status](https://travis-ci.org/markuplint/markuplint.svg?branch=next)](https://travis-ci.org/markuplint/markuplint)
[![Coverage Status](https://coveralls.io/repos/github/markuplint/markuplint/badge.svg?branch=next)](https://coveralls.io/github/markuplint/markuplint?branch=next)
[![Gitter](https://badges.gitter.im/markuplint/community.svg)](https://gitter.im/markuplint/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmarkuplint%2Fmarkuplint.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmarkuplint%2Fmarkuplint?ref=badge_shield)

A Linter for All Markup Languages (for legacy/modern HTML, Web Components, SVG, MathML, AMP HTML and more).

## Install

```sh
$ npm install -D markuplint
$ yarn add -D markuplint
```

## Packages

| Package                                                             | NPM                                                                                                                                   | Platform  |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| [`markuplint`](./packages/markuplint)                               | [![npm version](https://badge.fury.io/js/markuplint.svg)](https://badge.fury.io/js/markuplint)                                        | Node.js   |
| [`@markuplint/file-resolver`](./packages/@markuplint/file-resolver) | [![npm version](https://badge.fury.io/js/%40markuplint%2Ffile-resolver.svg)](https://www.npmjs.com/package/@markuplint/file-resolver) | Node.js   |
| [`@markuplint/html-ls`](./packages/@markuplint/html-ls)             | [![npm version](https://badge.fury.io/js/%40markuplint%2Fhtml-ls.svg)](https://badge.fury.io/js/%40markuplint%2Fhtml-ls)              | Universal |
| [`@markuplint/html-parser`](./packages/@markuplint/html-parser)     | [![npm version](https://badge.fury.io/js/%40markuplint%2Fhtml-parser.svg)](https://badge.fury.io/js/%40markuplint%2Fhtml-parser)      | Universal |
| [`@markuplint/i18n`](./packages/@markuplint/i18n)                   | [![npm version](https://badge.fury.io/js/%40markuplint%2Fi18n.svg)](https://badge.fury.io/js/%40markuplint%2Fi18n)                    | Universal |
| [`@markuplint/ml-ast`](./packages/@markuplint/ml-ast)               | [![npm version](https://badge.fury.io/js/%40markuplint%2Fml-ast.svg)](https://badge.fury.io/js/%40markuplint%2Fml-ast)                | Universal |
| [`@markuplint/ml-config`](./packages/@markuplint/ml-config)         | [![npm version](https://badge.fury.io/js/%40markuplint%2Fml-config.svg)](https://badge.fury.io/js/%40markuplint%2Fml-config)          | Universal |
| [`@markuplint/ml-core`](./packages/@markuplint/ml-core)             | [![npm version](https://badge.fury.io/js/%40markuplint%2Fml-core.svg)](https://badge.fury.io/js/%40markuplint%2Fml-core)              | Universal |
| [`@markuplint/ml-spec`](./packages/@markuplint/ml-spec)             | [![npm version](https://badge.fury.io/js/%40markuplint%2Fml-spec.svg)](https://badge.fury.io/js/%40markuplint%2Fml-spec)              | Universal |
| [`@markuplint/rules`](./packages/@markuplint/rules)                 | [![npm version](https://badge.fury.io/js/%40markuplint%2Frules.svg)](https://badge.fury.io/js/%40markuplint%2Frules)                  | Universal |

## Editor Extensions

| Editor                                                                                                                                  | Page                                                                                                    | Author                                         |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| <a href="https://marketplace.visualstudio.com/items?itemName=yusukehirao.vscode-markuplint"><img src="media/vscode.png" width="75"></a> | [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=yusukehirao.vscode-markuplint) | [@YusukeHirao](https://github.com/YusukeHirao) |
| <a href="https://marketplace.visualstudio.com/items?itemName=yusukehirao.vscode-markuplint"><img src="media/vim.png" width="75"></a>    | [Vim](https://github.com/heavenshell/vim-markuplint) (Not support v1.x yet)                             | [@heavenshell](https://github.com/heavenshell) |

## Other Tools

-   [gulp-markuplint](https://github.com/oro-oss/gulp-markuplint) (Not support v1.x yet) Author: [@ktsn](https://twitter.com/ktsn)

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmarkuplint%2Fmarkuplint.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmarkuplint%2Fmarkuplint?ref=badge_large)

## Thanks

This linter is inspired by:

-   [HTMLHint](http://htmlhint.com/)
-   [ESLint](https://eslint.org/)
-   [stylelint](https://stylelint.io/)
-   [textlint](https://textlint.github.io/)
