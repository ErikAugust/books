import { Command } from '@oclif/command';
import { promptAddBook } from '../prompts/add';
import { Books, Book } from '@eaj/books';
import { displayAsciiArt } from '../misc/ascii';

const chalk = require('chalk');

/**
 * @class Add
 * @author Erik August Johnson <erik@eaj.io>
 */
export default class Add extends Command {
  static description = 'add a new book to list';

  async run() {
    const book = await promptAddBook();
    const books = new Books();
    books.list.push(new Book(book));
    books.save();
    await displayAsciiArt('Books');
    this.log(`${chalk.bold.italic(book.title)} has been successfully added.`);
  }
}
