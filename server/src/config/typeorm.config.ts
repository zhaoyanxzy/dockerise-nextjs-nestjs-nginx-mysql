import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';

export const getTypeOrmConfig = (
  config: ConfigService,
): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: config.get('DATABASE_HOST'),
    port: config.get('DATABASE_PORT'),
    username: config.get('DATABASE_USER'),
    password: config.get('DATABASE_PASSWORD'),
    database: config.get('DATABASE_NAME'),
    entities: [User],
    synchronize: true, // set to false in production!
  };
};
