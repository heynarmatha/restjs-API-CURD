import { StudentDTO } from 'dto/student.dto';
import { Student } from 'interface/student.interface';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getStudents(): Promise<Student[]>;
    getOneStudent(id: string): Promise<Student>;
    updateOneStudent(id: string, data: StudentDTO): Promise<Student>;
    createStudent(data: StudentDTO): Promise<Student>;
    deleteOneStudent(id: string): Promise<Student>;
}
