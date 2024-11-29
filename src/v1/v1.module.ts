import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
// import { PesertaModule } from './peserta/peserta.module';

//jangan lupa untuk meletakan configurasi pada env
@Module({
  imports: [
    UserModule,
    AuthModule,
    // PesertaModule
  ],
})
export class V1Module {}
