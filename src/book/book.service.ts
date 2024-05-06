import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  private books: Book[] = [];

  findAll(): Book[] {
    return this.books;
  }

  findOne(code: string): Book {
    return this.books.find(book => book.code === code);
  }

  create(book: Book): Book {
    this.books.push(book);
    return book;
  }

  update(code: string, book: Book): Book {
    const index = this.books.findIndex(b => b.code === code);
    if (index !== -1) {
      this.books[index] = { ...book, code };
      return this.books[index];
    }
    return null;
  }

  delete(code: string): Book {
    const index = this.books.findIndex(b => b.code === code);
    if (index !== -1) {
      const deletedBook = this.books[index];
      this.books.splice(index, 1);
      return deletedBook;
    }
    return null;
  }
}
