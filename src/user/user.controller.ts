import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UptadePutUserDTO } from './dto/update-put-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.userService.create(data);
  }

  @Get()
  async list() {
    return this.userService.list();
  }

  @Get(':id')
  async showById(@Param('id', ParseIntPipe) id) {
    return this.userService.showById(id)
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
