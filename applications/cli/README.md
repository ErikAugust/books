@eaj/books-cli
==============

CLI for the Books system

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@eaj/books-cli.svg)](https://npmjs.org/package/@eaj/books-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@eaj/books-cli.svg)](https://npmjs.org/package/@eaj/books-cli)
[![License](https://img.shields.io/npm/l/@eaj/books-cli.svg)](https://github.com/ErikAugust/books/blob/master/package.json)

<!-- toc -->
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
* [`books hello [FILE]`](#books-hello-file)
* [`books help [COMMAND]`](#books-help-command)

## `books hello [FILE]`

describe the command here

```
USAGE
  $ books hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ books hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/ErikAugust/books/blob/v0.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
