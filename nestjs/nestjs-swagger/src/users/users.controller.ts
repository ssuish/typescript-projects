import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
  }

  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({name: 'name', required: false})
  @Get()
  getUsers(@Query('name') name: string): User[] {
    return this.userService.findAll(name);
  }

  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse()
  @Get(':id')
  getUsersById(@Param('id', ParseIntPipe) id: number ): User {
    return this.userService.findById(id);
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Post()
  createUser(@Body() body: CreateUserDTO): User {
    return this.userService.createUser(body);
  }
}
