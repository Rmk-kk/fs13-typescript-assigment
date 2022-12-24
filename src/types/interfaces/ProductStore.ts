import {Entity} from "./entity";


export interface ProductStore extends Entity {
    title: string,
    price: number,
    description: string,
    category: ProductStoreCategory
    images: string[],
}

export interface ProductStoreCategory {
    id: number,
    name: Name,
    image: string,
}


export enum Name {
    Clothes = "Clothes",
    Electronics = "Electronics",
    Furniture = "Furniture",
    Others = "Others",
    Shoes = "Shoes",
}