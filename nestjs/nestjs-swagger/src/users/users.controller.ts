import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @Get()
  getUsers(): User[] {
    return this.userService.findAll();
  }

  @ApiOkResponse({ type: User })
  @Get(':id')
  getUsersById(@Param('id') id: string): User {
    return this.userService.findById(parseInt(id));
  }

  @ApiCreatedResponse({ type: User })
  @Post()
  createUser(@Body() body: CreateUserDTO): User {
    return this.userService.createUser(body);
  }
}
