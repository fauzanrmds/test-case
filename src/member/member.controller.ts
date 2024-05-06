import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Member } from './member.entity';
import { MemberService } from './member.service';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  findAll(): Member[] {
    return this.memberService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string): Member {
    return this.memberService.findOne(code);
  }

  @Post()
  create(@Body() member: Member): Member {
    return this.memberService.create(member);
  }

  @Put(':code')
  update(@Param('code') code: string, @Body() member: Member): Member {
    return this.memberService.update(code, member);
  }

  @Delete(':code')
  delete(@Param('code') code: string): Member {
    return this.memberService.delete(code);
  }
}
