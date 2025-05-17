// src/student/student.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from 'src/entities/department.entity';
import { Student } from 'src/entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepo: Repository<Student>,

    @InjectRepository(Department)
    private readonly deptRepo: Repository<Department>
  ) {}

  async create(data: CreateStudentDto) {
    const department = await this.deptRepo.findOneBy({ id: data.departmentId });
    if (!department) throw new NotFoundException('Department not found');

    const student = this.studentRepo.create({ ...data, department });
    return this.studentRepo.save(student);
  }

  findAll() {
    return this.studentRepo.find();
  }

  async findOne(id: string) {
    const student = await this.studentRepo.findOne({ where: { id } });
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }

  async update(id: string, data: UpdateStudentDto) {
    const student = await this.findOne(id);
    if (data.departmentId) {
      const department = await this.deptRepo.findOneBy({ id: data.departmentId });
      if (!department) throw new NotFoundException('Department not found');
      student.department = department;
    }
    Object.assign(student, data);
    return this.studentRepo.save(student);
  }

  async remove(id: string) {
    const student = await this.findOne(id);
    return this.studentRepo.remove(student);
  }
}
