import { Controller, Get, UseGuards ,Request, Post, Body, HttpException, HttpStatus} from '@nestjs/common';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}


  @Get('admin')
  // @Roles('admin')
  // @UseGuards(RolesGuard)
  getAdminContent() {
    return 'This route is only for admins!';
  }

  @Get()
  async getUsers() {
    const data = await this.userService.findAll()
    return {
      message: 'Ni datanya Woi',
      data: data
    };
   }

  @Post()
  async CreateUsers(@Body() user : User ) {
    try {
      const data = await this.userService.createUser(user)
      if (data)
      return {
        message: 'Berhasi Membuat User',
        data: data.id
      };
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
   }

 

}
