import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from 'schema/student.schema';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/student'),
    MongooseModule.forFeature([{ name: 'student', schema: StudentSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
