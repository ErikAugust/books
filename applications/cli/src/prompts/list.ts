import { Book } from '@eaj/books';

const inquirer = require('inquirer');

export async function promptSelectBookFromList(books: Book[]) {
    const prompt = await inquirer.prompt([
        {
          type: 'list',
          message: 'Select book from titles',
          name: 'items',
          choices: books.map((book, index)=> {
            const label = book.title;
            return { name: book.title, value: book.getUuidShortcode() }
          })
        }
      ]);
      return prompt.items;
}