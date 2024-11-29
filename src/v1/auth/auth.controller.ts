import { Controller, HttpException, HttpStatus, Post,Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('login')
    async login(@Request() req) {
      const data = await this.authService.validateUser(req.body.username,req.body.password)
      // console.log(data)
      if(data === null ){
        throw new HttpException(
          { message: 'Password Atau Username Salah' },
          HttpStatus.BAD_REQUEST,
        );
      }
      return await this.authService.login(req.body);
    }
}
