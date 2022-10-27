import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentDTO } from 'dto/student.dto';
import { Student } from 'interface/student.interface';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getStudents(): Promise<Student[]> {
    return await this.appService.getStudents();
  }
  @Get(':id')
  async getOneStudent(@Param('id') id: string): Promise<Student> {
    return await this.appService.getOneStudent(id);
  }
  @Put(':id')
  async updateOneStudent(
    @Param('id') id: string,
    @Body() data: StudentDTO,
  ): Promise<Student> {
    return await this.appService.updateOneStudent(id, data);
  }
  @Post()
  async createStudent(@Body() data: StudentDTO): Promise<Student> {
    return await this.appService.createStudent(data);
  }
  @Delete(':id')
  async deleteOneStudent(@Param('id') id: string): Promise<Student> {
    return await this.appService.deleteOneStudent(id);
  }
}
