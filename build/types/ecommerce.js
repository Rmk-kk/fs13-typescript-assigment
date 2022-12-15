"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
class List extends Array {
    /* fix function fetchAll to save data in the array once the fetching is successful*/
    async fetchAll(url) {
        const data = await fetch(url);
        const result = await data.json();
        this.push(...result);
        return result;
    }
    /* complete the function sortList() with a parameter "order", which can be
    either "asc" or "desc". Sort the array by id according to the given order and return the
    reference to the same array*/
    // sortList = function (order:string) {
    //     if(order === 'desc') {
    //         this.sort((first, second) => second.id - first.id)
    //     } else if(order === 'asc') {
    //         this.sort((first, second) => first.id - second.id)
    //     } else {
    //         return this
    //     }
    // }
    /* complete method push(), which overrides original "push" method. New item can be added to the array if
    id does not exist. Only add all the items to the array if every item satisfies the condition.
    Return 1 if can push all new items to the array, otherwise return 0 */
    push(...items) {
        items.map(item => {
            if (this.filter(element => element.id === item.id).length > 0) {
                console.log(123);
                return 0;
            }
            else {
                for (let i = 0; i < items.length; i++) {
                    this[this.length] = item;
                }
                return 1;
            }
        });
        return 0;
    }
}
exports.List = List;
// interface ProductStore{
//     id: number
//     title: string
//     price: string
// }
// const fetchAll = async <T>(url: string): Promise<T> => {
//     const jsondata = await fetch(url)
//     const data = await jsondata.json()
//     return data
// }
// const getProduct = await fetchAll<ProductStore | StoreError>("https://api.escuelajs.co/api/v1/products/1dfdgfd")
// if ("statusCode" in getProduct) {
//     console.log(getProduct.statusCode, getProduct.message)
// } else {
//     console.log(getProduct.title)
// }
