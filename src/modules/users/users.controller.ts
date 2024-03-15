import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDTO } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Post("/")
  async create(@Body() data: UserCreateDTO) {

    const result = await this.usersService.create(data);
    return result;
  }
}
