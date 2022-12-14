import { Entity } from "./common"
import { Product } from "./product"
import { User } from "./user"

export class List<T extends Entity> extends Array<T> {}
