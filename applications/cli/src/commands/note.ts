import {Command, flags} from '@oclif/command';
import { Books } from '@eaj/books';

import { promptAddNote } from '../prompts/note';
import { displayAsciiArt } from '../misc/ascii';
import { promptSelectBookFromList } from '../prompts/list';

const chalk = require('chalk');

/**
 * @class Note
 * @author Erik August Johnson <erik@eaj.io>
 */
export default class Note extends Command {
  static description = 'adds a note to book';

  static args = [
    {
      name: 'shortcode',
      required: false,
      description: 'uuid shortcode of book'
    }
  ];

  async run() {
    const {args} = this.parse(Note);
    let shortcode = args.shortcode?.toLowerCase();
    const books = new Books();

    if (!shortcode) {
      shortcode = await promptSelectBookFromList(books.list);
    }

    // Find the book by shortcode:
    const book = books.findByShortCode(shortcode);

    if (book) {
      this.log(`Adding a note for ${chalk.bold(book.title)}:`);
      // Prompt the user to enter 
      const note = await promptAddNote();
      book.addNote(note);
      books.save();
      await displayAsciiArt('Books');
      this.log(`Note was successfully saved to ${chalk.bold(book.title)}!`);
      
    } else {
      this.log(`A book could not be found from the shortcode: ${chalk.bold(shortcode)}`)
    }
  }
}
