import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Login } from './entities/login.entity'
import { Repository } from 'typeorm';
import { log } from 'console';
@Injectable()
export class LoginService {

  constructor(
    @InjectRepository(Login)
    private readonly loginRepository:
    Repository<Login>){

    }

  async create(createLoginDto: CreateLoginDto) {
    const login = this.loginRepository.create(createLoginDto);
    return await this.loginRepository.save(login);
  }

  async findAll() {
    return await this.loginRepository.find();
    
  }

  async findOne(user: string) {
      return await this.loginRepository.findOne({
        where: {user}
      });
  }

  async update(user: string, updateLoginDto: UpdateLoginDto) {
    const login = await this.findOne(user);

    if(!login){
      throw new NotFoundException();
    }

    Object.assign(login, updateLoginDto);
    
    return await this.loginRepository.save(login);
  }

  async remove(user: string) {
   const login = await this.findOne(user);
   if(!login){
    throw new NotFoundException();
   } 

   return await this.loginRepository.remove(login);
  }
}
