import { Books, Book, Quote } from '@eaj/books';

export default function handler(request, response) {
  if (request.method === 'POST') {
    const { slug, text } = request.body;
    const books = new Books();
    const book = books.findBySlug(slug);
    book.addNote({ text });
    books.save();
    response.status(200).json({ message: 'Quote added successfully' });
  } else {
    response.status(404).json({ message: 'Not found' });
  }
}