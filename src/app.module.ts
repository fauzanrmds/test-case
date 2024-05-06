import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Book } from './book.entity';
import { Member } from './member.entity';
import { BookService } from './book.service';
import { MemberService } from './member.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.user,
      password: process.env.user123,
      database: process.env.test-case,
      entities: [Book, Member],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Book, Member]),
  ],
  controllers: [AppController],
  providers: [AppService, BookService, MemberService],
})
export class AppModule {}
