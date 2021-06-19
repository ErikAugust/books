import {Command, flags} from '@oclif/command';
import { Books } from '@eaj/books';
import { displayAsciiArt } from '../misc/ascii';

const chalk = require('chalk');

export default class Complete extends Command {
  static description = 'sets a book to complete';

  static args = [
    {
      name: 'shortcode',
      required: true,
      description: 'uuid shortcode of book'
    }
  ];


  async run() {
    const {args} = this.parse(Complete)
    const shortcode = args.shortcode?.toLowerCase();

    // Find the book by shortcode:
    const books = new Books();
    const book = books.findByShortCode(shortcode);

    if (book) {
      book.completed = true;
      book.completedAt = new Date().toISOString();
      books.save();
      await displayAsciiArt('Books');
      this.log(`${chalk.bold(book.title)} is set to completed. Congrats! 🎉`);      
    } else {
      this.log(`A book could not be found from the shortcode: ${chalk.bold(shortcode)}`)
    }
  }
}
