import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

//jangan lupa untuk meletakan configurasi pada env
@Module({
  imports: [
    UserModule,
    AuthModule
  ],
})
export class V1Module {}
