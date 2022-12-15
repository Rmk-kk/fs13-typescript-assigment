import { Entity } from "./interfaces/entity"
import {StoreError} from "./interfaces/StoreError";


interface Error {
    'statusCode' : number,
    'message' : string,
}


export class List<T extends Entity> extends Array<T> {
    constructor() {
        super();
        Object.setPrototypeOf(this, List.prototype);
    }

    /* fix function fetchAll to save data in the array once the fetching is successful*/
     async fetchAll(url: string) {
        const data = await fetch(url)
        const result: T[] | StoreError =  await data.json();
        if('message' in result) {
            throw new Error('fail')
        }
        this.push(...result)
    }


    /* complete the function sortList() with a parameter "order", which can be
    either "asc" or "desc". Sort the array by id according to the given order and return the
    reference to the same array*/
    sortList (order: 'asc' | 'desc' = 'asc') {
        if(order === 'desc') {
            return this.sort((first, second) => second.id - first.id)
        } else if(order === 'asc') {
            return this.sort((first, second) => first.id - second.id)
        }
    }

    /* complete method push(), which overrides original "push" method. New item can be added to the array if
    id does not exist. Only add all the items to the array if every item satisfies the condition.
    Return 1 if can push all new items to the array, otherwise return 0 */
    push(...items: T[]): number {
        // items.map(item => {
        //     if(this.find(old => old.id === item.id)) {
        //         return console.log(`Same id: ${item.id}`)
        //     }
        //     for(let i = 0; i < items.length; i++) {
        //         this[this.length] = items[i]
        //     }
        //     return 1
        // })
        // return 0
    }
}


