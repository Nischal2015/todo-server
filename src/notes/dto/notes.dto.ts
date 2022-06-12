import { IsString, IsNotEmpty } from 'class-validator';

export class NotesDto {
  @IsString()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
