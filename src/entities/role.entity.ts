// role.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string; // e.g., 'ADMIN', 'USER', 'MODERATOR'
  @Column({ nullable: true })
  description: string;
  @ManyToMany(() => UserEntity, user => user.roles)
  users: UserEntity[];
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt: Date;
}
