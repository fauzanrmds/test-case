import { Injectable } from '@nestjs/common';
import { Borrowing } from './borrowing.entity';

@Injectable()
export class BorrowingService {
  private borrowings: Borrowing[] = [];

  findAll(): Borrowing[] {
    return this.borrowings;
  }

  findOne(memberCode: string, bookCode: string): Borrowing {
    return this.borrowings.find(borrowing => borrowing.memberCode === memberCode && borrowing.bookCode === bookCode);
  }

  create(borrowing: Borrowing): Borrowing {
    this.borrowings.push(borrowing);
    return borrowing;
  }

  update(memberCode: string, bookCode: string, borrowing: Borrowing): Borrowing {
    const index = this.borrowings.findIndex(b => b.memberCode === memberCode && b.bookCode === bookCode);
    if (index !== -1) {
      this.borrowings[index] = { ...borrowing, memberCode, bookCode };
      return this.borrowings[index];
    }
    return null;
  }

  delete(memberCode: string, bookCode: string): Borrowing {
    const index = this.borrowings.findIndex(b => b.memberCode === memberCode && b.bookCode === bookCode);
    if (index !== -1) {
      const deletedBorrowing = this.borrowings[index];
      this.borrowings.splice(index, 1);
      return deletedBorrowing;
    }
    return null;
  }
}
