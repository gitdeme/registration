// src/student/student.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Department } from './department.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ name: 'registration_date', type: 'timestamp' })
  registrationDate: Date;

  @ManyToOne(() => Department, department => department.students, { eager: true })
  @JoinColumn({ name: 'department_id' })
  department: Department;
}
