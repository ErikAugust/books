import {Command, flags} from '@oclif/command';
import { Books } from '@eaj/books';
import { getListTable } from '../tables/list';

export default class List extends Command {
  static description = 'lists all books';

  async run() {
    const books = new Books();
    this.log(getListTable(books.list).toString());
  }
}
