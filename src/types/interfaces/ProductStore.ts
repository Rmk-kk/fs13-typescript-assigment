import {Entity} from "./entity";


export interface ProductStore extends Entity {
    title: string,
    price: number,
    description: string,
    category: {
    id: number,
        name: string,
        image: string,
    },
    images: string[],
}