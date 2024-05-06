import { Injectable } from '@nestjs/common';
import { Member } from './member.entity';

@Injectable()
export class MemberService {
  private members: Member[] = [];

  findAll(): Member[] {
    return this.members;
  }

  findOne(code: string): Member {
    return this.members.find(member => member.code === code);
  }

  create(member: Member): Member {
    this.members.push(member);
    return member;
  }

  update(code: string, member: Member): Member {
    const index = this.members.findIndex(m => m.code === code);
    if (index !== -1) {
      this.members[index] = { ...member, code };
      return this.members[index];
    }
    return null;
  }

  delete(code: string): Member {
    const index = this.members.findIndex(m => m.code === code);
    if (index !== -1) {
      const deletedMember = this.members[index];
      this.members.splice(index, 1);
      return deletedMember;
    }
    return null;
  }
}
