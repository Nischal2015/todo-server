import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), NotesModule],
  providers: [PrismaService],
})
export class AppModule {}
