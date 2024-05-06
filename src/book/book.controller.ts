import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Book } from './book.entity';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll(): Book[] {
    return this.bookService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string): Book {
    return this.bookService.findOne(code);
  }

  @Post()
  create(@Body() book: Book): Book {
    return this.bookService.create(book);
  }

  @Put(':code')
  update(@Param('code') code: string, @Body() book: Book): Book {
    return this.bookService.update(code, book);
  }

  @Delete(':code')
  delete(@Param('code') code: string): Book {
    return this.bookService.delete(code);
  }
}
