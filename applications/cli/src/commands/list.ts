import {Command, flags} from '@oclif/command';
import { Books } from '@eaj/books';
import { getListTable } from '../tables/list';
import { displayAsciiArt } from '../misc/ascii';

export default class List extends Command {
  static description = 'lists all books';

  async run() {
    const books = new Books();
    await displayAsciiArt('Books');
    this.log(getListTable(books.list).toString());
  }
}
