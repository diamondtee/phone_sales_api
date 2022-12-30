"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products = [];
let ProductsService = class ProductsService {
    createProduct(product) {
        product.isAvailable = true;
        product.id = products.length;
        products.push(product);
        return products;
    }
    listAllProducts() {
        const prod = products.filter(p => p.isAvailable === true);
        return prod;
    }
    viewOneProduct(id) {
        const product = products.filter((p) => p.id === id);
        return product;
    }
    updateProductInfo(workwith) {
        const productIndex = products.findIndex(p => p.id === workwith.id);
        const product = products[productIndex];
        products[productIndex] = {
            id: product.id,
            name: workwith.changes.name || product.name,
            model: workwith.changes.model || product.model,
            price: workwith.changes.price || product.price,
            color: workwith.changes.color || product.color,
            isAvailable: workwith.changes.isAvailable || product.isAvailable,
        };
        return products;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map