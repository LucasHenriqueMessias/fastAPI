import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  create(@Body() createLoginDto: CreateLoginDto) {
    

    return this.loginService.create(createLoginDto);
  }

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Get('get/user/:user')
  findOne(@Param('user') user: string) {
    return this.loginService.findOne(user);
  }

  @Patch('update/:user')
  update(@Param('user') user: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(user, updateLoginDto);
  }

  @Delete('delete/:user')
  remove(@Param('user') user: string) {
    return this.loginService.remove(user);
  }
}
