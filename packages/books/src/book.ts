import { v4 as uuid } from 'uuid';

/**
 * @class Quote
 * @author Erik August Johnson <erik@eaj.io>
 */
export class Quote {
    text: string;
    page: number;
    createdAt: string;

    constructor(quote: any) {
        this.createdAt = quote.createdAt || new Date().toISOString();
        this.text = quote.text;
        this.page = quote.page;
    }
}

/**
 * @class Note
 * @author Erik August Johnson <erik@eaj.io>
 */
export class Note {
    text: string;
    createdAt: string;

    constructor(note: any) {
        this.createdAt = note.createdAt || new Date().toISOString();
        this.text = note.text;
    }
}

/**
 * @class Book
 * @author Erik August Johnson <erik@eaj.io>
 */
export default class Book {
    uuid: string;
    createdAt: string;
    title: string;
    slug: string;
    author: string;
    description: string;
    pages: number;
    image: string;
    completed: boolean;
    completedAt: string;
    quotes: Quote[];
    notes: Note[];

    constructor(book: any) {
        this.uuid = book.uuid || uuid();
        this.createdAt = book.createdAt || new Date().toISOString()
        this.title = book.title;
        this.slug = book.slug;
        this.author = book.author;
        this.description = book.description;
        this.pages = book.pages;
        this.image = book.image;
        this.completed = book.completed;
        this.completedAt = book.completedAt;
        this.quotes = book.quotes ? book.quotes.map((quote: any) => new Quote(quote)) : [];
        this.notes = book.notes ? book.notes.map((note: any) => new Note(note)) : [];
    }

    /**
     * Adds quote to list of quotes
     * @param {Object} quote 
     */
    public addQuote(quote: Object) {
        this.quotes.push(new Quote(quote));
    }

    /**
     * Adds note to list of notes
     * @param {Object} note 
     */
    public addNote(note: Object) {
        this.notes.push(new Note(note));
    }

    /**
     * Returns the six character UUID shortcode for a given item
     * @returns {string}
     */
    public getUuidShortcode(): string {
        return this.uuid.slice(0, 6);
    }
}