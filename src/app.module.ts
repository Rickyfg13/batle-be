import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { V1Module } from './v1/v1.module';
import { AppController } from './app.controller';
import { AuthModule } from './v1/auth/auth.module';
import { AppService } from './app.service';

//jangan lupa untuk meletakan configurasi pada env
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost', 
      port: 5432, 
      username: 'postgres', 
      password: '123', 
      database: 'postgres', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true, 
    }),
    V1Module
  ],
  controllers: [AppController],
  providers: [AuthModule,AppService]
})
export class AppModule {}
