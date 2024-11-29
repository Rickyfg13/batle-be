import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('users')
export class UserController {
    
  @Get('admin')
  // @Roles('admin')
  // @UseGuards(RolesGuard)
  getAdminContent() {
    return 'This route is only for admins!';
  }
}
