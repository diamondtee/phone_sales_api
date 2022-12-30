import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
 


@Module({
  imports:[
    UsersModule,
    ProductsModule,
  TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'root',
      password: '',
      host:'localhost',
      database:'talentdev',
      port:3306,
      entities:[],
      synchronize:true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
