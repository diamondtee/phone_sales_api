import { Controller,Get,Post,Patch, Body, Param } from '@nestjs/common';
import { createSecureServer } from 'http2';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}


@Post()
createUser(@Body() user:User){
    return this.usersService.createUser(user);
}

@Patch(':usethis')
UpdateUser(@Body() usethis:any){
    return this.usersService.updateUser(usethis);
}

@Get(':dataa')
getUserInfo(@Param('dataa') dataa:any){
    return this.usersService.getUserInfo(dataa);
}
}  
