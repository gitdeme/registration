// src/student/dto/create-student.dto.ts
export class CreateStudentDto {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  registrationDate: Date;
  departmentId: string;
}
