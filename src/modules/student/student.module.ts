// src/student/student.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StudentService } from './service/student.service';
import { Student } from 'src/entities/student.entity';
import { Department } from 'src/entities/department.entity';
import { StudentController } from './controller/student.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Student, Department])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
