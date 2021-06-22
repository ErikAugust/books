# @eaj/books-cli

CLI for the Books system

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@eaj/books-cli.svg)](https://npmjs.org/package/@eaj/books-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@eaj/books-cli.svg)](https://npmjs.org/package/@eaj/books-cli)
[![License](https://img.shields.io/npm/l/@eaj/books-cli.svg)](https://github.com/ErikAugust/books/blob/master/package.json)

<!-- toc -->
* [@eaj/books-cli](#eajbooks-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @eaj/books-cli
$ books COMMAND
running command...
$ books (-v|--version|version)
@eaj/books-cli/0.0.0 darwin-x64 node-v12.18.4
$ books --help [COMMAND]
USAGE
  $ books COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`books add`](#books-add)
* [`books complete SHORTCODE`](#books-complete-shortcode)
* [`books help [COMMAND]`](#books-help-command)
* [`books list`](#books-list)
* [`books note [SHORTCODE]`](#books-note-shortcode)
* [`books quote [SHORTCODE]`](#books-quote-shortcode)

## `books add`

add a new book to list

```
USAGE
  $ books add
```

_See code: [src/commands/add.ts](https://github.com/ErikAugust/books/blob/v0.0.0/src/commands/add.ts)_

## `books complete SHORTCODE`

sets a book to complete

```
USAGE
  $ books complete SHORTCODE

ARGUMENTS
  SHORTCODE  uuid shortcode of book
```

_See code: [src/commands/complete.ts](https://github.com/ErikAugust/books/blob/v0.0.0/src/commands/complete.ts)_

## `books help [COMMAND]`

display help for books

```
USAGE
  $ books help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `books list`

lists all books

```
USAGE
  $ books list
```

_See code: [src/commands/list.ts](https://github.com/ErikAugust/books/blob/v0.0.0/src/commands/list.ts)_

## `books note [SHORTCODE]`

adds a note to book

```
USAGE
  $ books note [SHORTCODE]

ARGUMENTS
  SHORTCODE  uuid shortcode of book
```

_See code: [src/commands/note.ts](https://github.com/ErikAugust/books/blob/v0.0.0/src/commands/note.ts)_

## `books quote [SHORTCODE]`

adds a quote from book

```
USAGE
  $ books quote [SHORTCODE]

ARGUMENTS
  SHORTCODE  uuid shortcode of book
```

_See code: [src/commands/quote.ts](https://github.com/ErikAugust/books/blob/v0.0.0/src/commands/quote.ts)_
<!-- commandsstop -->
