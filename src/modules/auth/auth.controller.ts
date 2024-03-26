import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';



type LoginTDO = {
  username: string;
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  
  @Post('/login')
  async login(@Body() data: LoginTDO) {
    const result = await this.authService.login(data.username, data.password);
    return result;

  }
}
