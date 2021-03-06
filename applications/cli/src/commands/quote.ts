import {Command, flags} from '@oclif/command';
import { Books } from '@eaj/books';

import { displayAsciiArt } from '../misc/ascii';
import { promptAddQuote } from '../prompts/quote';
import { promptSelectBookFromList } from '../prompts/list';

const chalk = require('chalk');

/**
 * @class Quote
 * @author Erik August Johnson <erik@eaj.io>
 */
export default class Quote extends Command {
  static description = 'adds a quote from book';

  static args = [
    {
      name: 'shortcode',
      required: false,
      description: 'uuid shortcode of book'
    }
  ];

  async run() {
    const {args} = this.parse(Quote);
    let shortcode = args.shortcode?.toLowerCase();
    const books = new Books();

    if (!shortcode) {
      shortcode = await promptSelectBookFromList(books.list);
    }

    // Find the book by shortcode:
    const book = books.findByShortCode(shortcode);

    if (book) {
      this.log(`Adding a quote for ${chalk.bold(book.title)}:`);
      // Prompt the user to enter 
      const quote = await promptAddQuote();
      book.addQuote(quote);
      books.save();
      await displayAsciiArt('Books');
      this.log(`Quote was successfully saved to ${chalk.bold(book.title)}!`);
      
    } else {
      this.log(`A book could not be found from the shortcode: ${chalk.bold(shortcode)}`)
    }
  }
}
