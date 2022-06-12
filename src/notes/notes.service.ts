import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotesDto } from './dto';
import { Todo } from '@prisma/client';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}
  async getAllTodos(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async createTodo(dto: NotesDto): Promise<Todo> {
    return this.prisma.todo.create({
      data: dto,
    });
  }

  async updateTodo(id: string, dto: NotesDto): Promise<Todo> {
    return this.prisma.todo.update({
      where: { id },
      data: dto,
    });
  }

  async deleteTodo(id: string) {
    return this.prisma.todo.delete({
      where: { id },
    });
  }
}
