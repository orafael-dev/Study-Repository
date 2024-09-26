import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UptadePutUserDTO } from './dto/update-put-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body: CreateUserDTO) {
    return { body };
  }

  @Get()
  async list() {
    return { users: [] };
  }

  @Get(':id')
  async show(@Param() id) {
    return { users: {}, id };
  }

  @Put(':id')
  async update(@Body() { email, password, name }: UptadePutUserDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'PUT',
      email,
      password,
      name,
      id,
    };
  }

  @Patch(':id')
  async updatePartial(@Body() { email, password, name }: UptadePutUserDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'PUT',
      email,
      password,
      name,
      id,
    };
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }
}
