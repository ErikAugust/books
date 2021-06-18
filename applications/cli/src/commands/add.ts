import {Command, flags} from '@oclif/command';
import { promptAddBook } from '../prompts/add';
import { Books, Book } from '@eaj/books';
const chalk = require('chalk');

export default class Add extends Command {
  static description = 'add a new book to list';

  async run() {
    const book = await promptAddBook();
    const books = new Books();
    books.list.push(new Book(book));
    books.save();
    this.log(`${chalk.bold.italic(book.title)} has been successfully added.`);
  }
}
