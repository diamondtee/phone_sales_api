import { NestFactory } from '@nestjs/core';
//import { AppModule } from './app.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

async function bootstrap() {
  const user = await NestFactory.create(UsersModule);
  await user.listen(3000);
}
bootstrap();
