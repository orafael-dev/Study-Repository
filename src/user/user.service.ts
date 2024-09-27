import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UptadePutUserDTO } from './dto/update-put-user.dto';
import { UptadePatchUserDTO } from './dto/update-patch-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ email, name, password }: CreateUserDTO) {
    return this.prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
  }

  async list() {
    return this.prisma.user.findMany();
  }

  async showById(id: number) {
    if (!(await this.showById(id))) {
      throw new NotFoundException(`O usuário com o id: ${id} não existe.`);
    }
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, { name, email, password, birthAt }: UptadePutUserDTO) {
    if (!(await this.showById(id))) {
      throw new NotFoundException(`O usuário com o id: ${id} não existe.`);
    }
    return this.prisma.user.update({
      data: { name, email, password, birthAt: birthAt ? new Date(birthAt) : null },
      where: {
        id,
      },
    });
  }

  async updatePartial(id: number, { name, email, password, birthAt }: UptadePatchUserDTO) {
    const data: any = {};

    if (!(await this.showById(id))) {
      throw new NotFoundException(`O usuário com o id: ${id} não existe.`);
    }

    if (birthAt) {
      data.birthAt = new Date(birthAt);
    }

    if (email) {
      data.email = email;
    }
    if (password) {
      data.password = password;
    }
    if (name) {
      data.name = name;
    }

    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: number) {
    if (!(await this.showById(id))) {
      throw new NotFoundException(`O usuário com o id: ${id} não existe.`);
    }

    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
