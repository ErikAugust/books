import {config} from 'dotenv';
import { readFileSync } from 'fs';
import Book from './book';

config();

export const PATH: string | undefined = process.env.BOOKS_PATH;

export default class Books {
    path: string | undefined;
    file!: Buffer;
    list: Book[];

    constructor(path?: string) {
        this.path = path || PATH;
        const books = this.load();
        this.list = books.list.map((book: any) => new Book(book));
    }

    public find(title: string): Book | undefined {
        return this.list.find(book => book.title === title);
    }

    private load() {
        this.file = readFileSync(this.path as string);
        return JSON.parse(this.file.toString());
    }
}