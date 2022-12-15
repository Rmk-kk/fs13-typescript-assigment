import {Entity} from "./entity";

export interface UserStore extends Entity{
    email: string,
    password: string,
    name: string,
    role: string,
    avatar: string,
}