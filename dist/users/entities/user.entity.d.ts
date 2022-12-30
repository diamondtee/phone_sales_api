import { User } from '../interfaces/user.interface';
export declare class UserEntity implements User {
    id: number;
    email: string;
    name: string;
    password: string;
}
