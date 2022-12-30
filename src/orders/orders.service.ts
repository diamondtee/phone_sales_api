import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {Order} from "./interfaces/order.interface"
import { User } from 'src/users/interfaces/user.interface';
import { Product } from 'src/products/interfaces/product.interface';

let users: Array<User> = [];
let products: Array<Product> = [];
let orders : Array<Order> =[];

@Injectable()
export class OrdersService {
  createOrder(workwiththis:any) {
    if (users.find((u) => u.email ===workwiththis))
    {
      orders.push({
        email: workwiththis.email,
        product: workwiththis.product,
        quantity: workwiththis.quantity,
        price:workwiththis.price
    });
    }
    return orders;

 // else  {
   //  (message: `This user does not  exist. Please register to place an order`;
  //)}
  
  }



  ConfirmOrderDelivery(id: number, reqbody:any) {
    const orderIndex = orders.findIndex(o => o.email === reqbody);
    const order = orders[orderIndex];
    orders[orderIndex] = {
     email:reqbody.changes.email||order.email,
     product:reqbody.changes.product||order.product,
     quantity:reqbody.changes.quantity||order.quantity,
     price:reqbody.changes.price||order.price,
     totalPrice:reqbody.changes.totalPrice||order.price * order.quantity,
     deliveryAddress:reqbody.changes.deliveryAddress||order.deliveryAddress,
     deliveryStatus:reqbody.changes.deliveryStatus||order.deliveryStatus, 
    }
    //res.status(200).json({message : "Your changes was successful"});
   
   
   //})


    //return `This action updates a #${id} order`;
  }

  DeleteOrder(id: number, reqparams:any) {
    const orderEmail = reqparams.email;
 const order = orders.filter((order) => order.email.toLowerCase().includes(order.email.toLowerCase()));

 return `message:"Your order has been cancelled"`;
  }
}
