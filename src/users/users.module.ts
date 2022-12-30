import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
//import { OrdersModule } from 'src/orders/orders.module';
//import { ProductsModule } from 'src/products/products.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
