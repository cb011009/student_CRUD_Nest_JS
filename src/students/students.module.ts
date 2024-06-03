import { Module,ValidationPipe } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { Student, StudentSchema } from 'src/schemas/student.schema';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }])],
  controllers: [StudentsController],
  providers: [StudentsService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    }
  ],
})
export class StudentsModule {}
