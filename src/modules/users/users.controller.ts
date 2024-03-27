import { Body, Controller, Post, Put } from '@nestjs/common';
import { UpdateUserAddRoleDTO, UserCreateDTO } from './user.dto';
import { CreateUserUserCase } from './use-cases/create-user.usecase';
import { UpdateAddRoleUserUseCase } from './use-cases/update-add-role-user.usecase';

@Controller('users')
export class UsersController {
  constructor(private readonly createUserUseCase: CreateUserUserCase, private readonly updateAddRoleUserCase: UpdateAddRoleUserUseCase) {}


  @Post('/')
  async create(@Body() data: UserCreateDTO) { 

    const result = await this.createUserUseCase.execute(data);
    return result;
  }


  @Put('/roles')
  async updateRoles(@Body() data: UpdateUserAddRoleDTO) {

    const result = await this.updateAddRoleUserCase.execute(data);
    return result;
  }
}
