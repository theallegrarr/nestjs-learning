import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  /**
   * GET /users
   * GET /users/:id
   * POST /users
   * PATCH /users/:id
   * DELETE /users/:id
   */

  // GET /users
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.userService.findAll(role);
  }

  // GET /users/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  // POST /users
  @Post()
  createUser(
    @Body(ValidationPipe)
    user: CreateUserDto,
  ) {
    return this.userService.createUser(user);
  }

  // PATCH /users/:id
  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    userUpdate: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, userUpdate);
  }

  // DELETE /users/:id
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
