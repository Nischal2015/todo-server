import {
  Controller,
  Post,
  Delete,
  Patch,
  Get,
  Body,
  Param,
} from '@nestjs/common';
import { NotesDto } from './dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  getAllTodos() {
    return this.notesService.getAllTodos();
  }

  @Post()
  createTodo(@Body() dto: NotesDto) {
    return this.notesService.createTodo(dto);
  }

  @Patch(':id/update')
  patch(@Body() dto: NotesDto, @Param('id') id: string) {
    return this.notesService.updateTodo(id, dto);
  }

  @Delete(':id/delete')
  delete(@Param('id') id: string) {
    return this.notesService.deleteTodo(id);
  }
}
