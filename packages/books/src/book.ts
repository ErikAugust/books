import { v4 as uuid } from 'uuid';

/**
 * @class Quote
 * @author Erik August Johnson <erik@eaj.io>
 */
export class Quote {
    text: string;
    notes: string[];
    page: number;

    constructor(quote: any) {
        this.text = quote.text;
        this.notes = quote.notes;
        this.page = quote.page;
    }
}

/**
 * @class Book
 * @author Erik August Johnson <erik@eaj.io>
 */
export default class Book {
    uuid: string;
    title: string;
    slug: string;
    author: string;
    description: string;
    pages: number;
    image: string;
    completed: boolean;
    quotes: Quote[];
    notes: string[];

    constructor(book: any) {
        this.uuid = book.uuid || uuid();
        this.title = book.title;
        this.slug = book.slug;
        this.author = book.author;
        this.description = book.description;
        this.pages = book.pages;
        this.image = book.image;
        this.completed = book.completed;
        this.quotes = book.quotes ? book.quotes.map((quote: any) => new Quote(quote)): [];
        this.notes = book.notes || [];
    }

    /**
     * Adds quote to list of quotes
     * @param {Quote} quote 
     */
    public addQuote(quote: Object) {
        this.quotes.push(new Quote(quote));
    }

    public addNote(note: string) {
        this.notes.push(note);
    }

    /**
     * Returns the six character UUID shortcode for a given item
     * @returns {string}
     */
    public getUuidShortcode(): string {
        return this.uuid.slice(0, 6);
    }
}