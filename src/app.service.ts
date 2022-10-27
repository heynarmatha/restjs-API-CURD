import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { StudentDTO } from 'dto/student.dto';
import { Student } from 'interface/student.interface';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('student') private studentModel: Model<Student>) {}

  async getStudents(): Promise<Student[]> {
    return await this.studentModel.find().exec();
  }
  async getOneStudent(id: string): Promise<Student> {
    return await this.studentModel.findById(id).exec();
  }
  async updateOneStudent(id: string, data: StudentDTO): Promise<Student> {
    return await this.studentModel
      .findByIdAndUpdate({ _id: id }, data, { new: true })
      .exec();
  }
  async createStudent(data: StudentDTO): Promise<Student> {
    const student = new this.studentModel(data);
    return await student.save();
  }
  async deleteOneStudent(id: string): Promise<Student> {
    return await this.studentModel.findByIdAndDelete({ _id: id }).exec();
  }
}
