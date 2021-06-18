import {Command, flags} from '@oclif/command';
import { Books } from '@eaj/books';
const chalk = require('chalk');

import { promptAddQuote } from '../prompts/quote';

export default class Quote extends Command {
  static description = 'adds a quote from book';

  static args = [
    {
      name: 'shortcode',
      required: true,
      description: 'uuid shortcode of book'
    }
  ];

  async run() {
    const {args} = this.parse(Quote);
    const shortcode = args.shortcode?.toLowerCase();

    // Find the book by shortcode:
    const books = new Books();
    const book = books.findByShortCode(shortcode);

    if (book) {
      this.log(`Adding a quote for ${chalk.bold(book.title)}:`);
      // Prompt the user to enter 
      const quote = await promptAddQuote();
      book.addQuote(quote);
      books.save();
      this.log(`Quote was successfully saved to ${chalk.bold(book.title)}`);
      
    } else {
      this.log(`A book could not be found from the shortcode: ${chalk.bold(shortcode)}`)
    }
  }
}
