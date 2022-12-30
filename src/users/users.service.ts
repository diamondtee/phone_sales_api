import { Injectable } from '@nestjs/common';
import {User} from "./interfaces/user.interface";
import {InjectRepository} from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import {Repository} from 'typeorm';

//const users : Array<User> = [];

@Injectable()
export class UsersService {

constructor(
    @InjectRepository(UserEntity)
    private userRepository:Repository<UserEntity>,
){}
 async createUser(user:User){
    if (user.email && user.name && user.password)
    {
        const savedUser=await this.userRepository.save(user);
        //user.id = users.length;
        //users.push(user);
        return savedUser;
    }
    
}

updateUser(usethis:any){
  /*  const index = users.findIndex((u) => u.email === usethis.email);
    const user = users[index];
    users[index] = {
      id:user.id,
      name: usethis.changes.name || user.name,
      email: usethis.changes.email || user.email,
      password: usethis.changes.password || user.password,
    };
    return users;
*/
}

getUserInfo(dataa:any){
    
 //  let user = users.filter((u) => u.email === dataa);
   
   //return user;
}

}
