import { Module } from '@nestjs/common';
import { BorrowingService } from './borrowing.service';

@Module({
  providers: [BorrowingService],
})
export class BorrowingModule {}
