import { User } from "./interfaces/user.interface";
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(user: User): Promise<User & UserEntity>;
    updateUser(usethis: any): void;
    getUserInfo(dataa: any): void;
}
