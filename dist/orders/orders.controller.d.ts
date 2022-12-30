import { OrdersService } from './orders.service';
import { Order } from "./interfaces/order.interface";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(workwiththis: any): Order[];
    update(id: string, reqbody: any): void;
    remove(id: string, reqparams: any): string;
}
