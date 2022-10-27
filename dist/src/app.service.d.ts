import { StudentDTO } from 'dto/student.dto';
import { Student } from 'interface/student.interface';
import { Model } from 'mongoose';
export declare class AppService {
    private studentModel;
    constructor(studentModel: Model<Student>);
    getStudents(): Promise<Student[]>;
    getOneStudent(id: string): Promise<Student>;
    updateOneStudent(id: string, data: StudentDTO): Promise<Student>;
    createStudent(data: StudentDTO): Promise<Student>;
    deleteOneStudent(id: string): Promise<Student>;
}
