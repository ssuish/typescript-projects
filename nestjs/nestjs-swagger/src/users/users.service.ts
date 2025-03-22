import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'John Doe' },
    { id: 1, name: 'Jane Doe' },
    { id: 2, name: 'Johnny Doe' }];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name?.includes(name));
    }
    return this.users;
  }

  findById(id: number): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  createUser(createUserDto: CreateUserDTO): User {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
