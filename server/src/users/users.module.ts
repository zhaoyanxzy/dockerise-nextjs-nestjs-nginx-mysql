import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register User entity with TypeORM
  controllers: [UsersController], // Register UsersController
  providers: [UsersService], // Register UsersService
  exports: [UsersService], // Export UsersService for use in other modules if necessary
})
export class UsersModule {}
