import {Customer} from "./Customer";

export class Branch {
    private customers:Customer[];
    constructor(private name:string) {
        this.customers = []
    }

    getName():string {
        return this.name
    }
    getCustomers():Customer[] {
        return this.customers
    }

    addCustomer(customer:Customer):boolean {
        try {
            let result = this.customers.find(person => person.getId() === customer.getId());
            if(result) {
                console.log(`Customer ${customer.getName()}, id: ${customer.getId()} already exist`);
                return false
            } else {
                this.customers.push(customer);
                console.log(`Customer ${customer.getName()}, id-${customer.getId()} was successfully added to branch '${this.name}'`);
                return true
            }
        } catch (e) {
            throw new Error()
        }
    }

    addCustomerTransaction(id:string, amount:number):boolean {
       let customer = this.customers.find(customer => customer.getId() === id);
       if(customer) {
           customer.addTransaction(amount)
           return true
       } else {
           // throw new Error(`Problem occurred, or customer does not exist`)
           console.log(`Problem occurred, or customer does not exist`)
       }
       return false
    }

    findCustomer(id:string):Customer | null {
        const customer = this.customers.find(customer => customer.getId() === id);
        if(customer) {
            return customer
        } else {
            return null
        }
    }

}