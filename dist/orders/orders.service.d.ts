import { Order } from "./interfaces/order.interface";
export declare class OrdersService {
    createOrder(workwiththis: any): Order[];
    ConfirmOrderDelivery(id: number, reqbody: any): void;
    DeleteOrder(id: number, reqparams: any): string;
}
