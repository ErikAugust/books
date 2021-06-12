import { Books } from '@eaj/books';

const books = new Books();

const book = books.find('The Adventures of Tom Sawyer');
book?.quotes.forEach((quote => console.log(quote.text + '\n')));