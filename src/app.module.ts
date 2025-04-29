import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || '127.0.0.1',
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASS ,
      database: process.env.DB_NAME ,
      autoLoadEntities: true,
      synchronize: true,
    }), UsersModule, ProductModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
