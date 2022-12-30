"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
let users = [];
let products = [];
let orders = [];
let OrdersService = class OrdersService {
    createOrder(workwiththis) {
        if (users.find((u) => u.email === workwiththis)) {
            orders.push({
                email: workwiththis.email,
                product: workwiththis.product,
                quantity: workwiththis.quantity,
                price: workwiththis.price
            });
        }
        return orders;
    }
    ConfirmOrderDelivery(id, reqbody) {
        const orderIndex = orders.findIndex(o => o.email === reqbody);
        const order = orders[orderIndex];
        orders[orderIndex] = {
            email: reqbody.changes.email || order.email,
            product: reqbody.changes.product || order.product,
            quantity: reqbody.changes.quantity || order.quantity,
            price: reqbody.changes.price || order.price,
            totalPrice: reqbody.changes.totalPrice || order.price * order.quantity,
            deliveryAddress: reqbody.changes.deliveryAddress || order.deliveryAddress,
            deliveryStatus: reqbody.changes.deliveryStatus || order.deliveryStatus,
        };
    }
    DeleteOrder(id, reqparams) {
        const orderEmail = reqparams.email;
        const order = orders.filter((order) => order.email.toLowerCase().includes(order.email.toLowerCase()));
        return `message:"Your order has been cancelled"`;
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)()
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map