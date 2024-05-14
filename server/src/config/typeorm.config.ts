import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getTypeOrmConfig = async (
  config: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  type: 'mysql',
  host: config.get('DATABASE_HOST'),
  port: config.get('DATABASE_PORT'),
  username: config.get('DATABASE_USER'),
  password: config.get('DATABASE_PASSWORD'),
  database: config.get('DATABASE_NAME'),
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, // set to false in production!
});
