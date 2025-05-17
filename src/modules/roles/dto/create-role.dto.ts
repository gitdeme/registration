// src/roles/dto/create-role.dto.ts
import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'Admin' })
  name: string;
  @ApiProperty()
  @Optional()
  description: string;
}
