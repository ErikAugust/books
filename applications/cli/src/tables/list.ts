const Table = require('cli-table');
const chalk = require('chalk');

import { Book } from '@eaj/books';

export function getListTable(list: Array<Book>) {
    const table = new Table({
      head: [
        chalk.greenBright('shortcode'),
        chalk.greenBright('title'),
        chalk.greenBright('author')
      ]
    });
    for (let i = 0; i < list.length; i++) {
      const uuid = list[i].uuid.slice(0, 6);
      const author = list[i].author;
      table.push([uuid, list[i].title, author]);
    }
    return table;
}