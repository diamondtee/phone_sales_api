import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(user: User): Promise<User & import("./entities/user.entity").UserEntity>;
    UpdateUser(usethis: any): void;
    getUserInfo(dataa: any): void;
}
