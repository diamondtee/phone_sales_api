import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {Order} from "./interfaces/order.interface"


@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() workwiththis:any) {
    return this.ordersService.createOrder(workwiththis);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() reqbody:any) {
    return this.ordersService.ConfirmOrderDelivery(+id, reqbody);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body()reqparams:any) {
    return this.ordersService.DeleteOrder(+id, reqparams);
  }
}
