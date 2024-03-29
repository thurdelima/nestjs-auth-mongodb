import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { CreateUserUserCase } from './use-cases/create-user.usecase';
import { UpdateAddRoleUserUseCase } from './use-cases/update-add-role-user.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema
      }
    ]),
  ],
  controllers: [UsersController],
  providers: [CreateUserUserCase, UpdateAddRoleUserUseCase],
})
export class UsersModule {}
