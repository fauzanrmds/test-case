import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Borrowing } from './borrowing.entity';
import { BorrowingService } from './borrowing.service';

@Controller('borrowings')
export class BorrowingController {
  constructor(private readonly borrowingService: BorrowingService) {}

  @Get()
  findAll(): Borrowing[] {
    return this.borrowingService.findAll();
  }

  @Get(':memberCode/:bookCode')
  findOne(@Param('memberCode') memberCode: string, @Param('bookCode') bookCode: string): Borrowing {
    return this.borrowingService.findOne(memberCode, bookCode);
  }

  @Post()
  create(@Body() borrowing: Borrowing): Borrowing {
    return this.borrowingService.create(borrowing);
  }

  @Put(':memberCode/:bookCode')
  update(@Param('memberCode') memberCode: string, @Param('bookCode') bookCode: string, @Body() borrowing: Borrowing): Borrowing {
    return this.borrowingService.update(memberCode, bookCode, borrowing);
  }

  @Delete(':memberCode/:bookCode')
  delete(@Param('memberCode') memberCode: string, @Param('bookCode') bookCode: string): Borrowing {
    return this.borrowingService.delete(memberCode, bookCode);
  }
}
