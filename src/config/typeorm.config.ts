/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
export const typeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => {
  const db = configService.get('database');
  return {
    type: 'postgres',
    host: db.host,
    port: Number(db.port),
    username: db.username,
    password: db.password,
    database: db.name,
    entities: [__dirname + '/../**/entities/*.entity{.ts,.js}'],
    synchronize: true, // Disable in production!
  };
};
