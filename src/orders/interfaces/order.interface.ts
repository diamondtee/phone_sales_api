export interface Order{
    id?:number;
    email: string;
    quantity:number;
    product:string;
    price:number;
    totalPrice?:number;
    deliveryAddress?:string
    deliveryStatus?:boolean
    
    

}