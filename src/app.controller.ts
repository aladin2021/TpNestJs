import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
 messages =['alaeddine khémiri'];

  @Get(path:'Users')
  getUsers(): string[] {
    return this.Users;
  }
@Get(path:'Users/first')
  getfirstUser(): string{
    return this.Users[0];
  }
  @Post(path:'newUser')
addUser(): string {
  this.Users.push['alaeddine khémiri'];
  return 'alaeddine khémiri';
  }
}
