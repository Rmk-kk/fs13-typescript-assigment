"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Branch = void 0;
class Branch {
    constructor(name) {
        this.name = name;
        this.customers = [];
    }
    getName() {
        return this.name;
    }
    getCustomers() {
        return this.customers;
    }
    addCustomer(customer) {
        try {
            let result = this.customers.find(person => person.getId() === customer.getId());
            if (result) {
                console.log(`Customer ${customer.getName()}, id: ${customer.getId()} already exist`);
                return false;
            }
            else {
                this.customers.push(customer);
                console.log(`Customer ${customer.getName()}, id-${customer.getId()} was successfully added to branch '${this.name}'`);
                return true;
            }
        }
        catch (e) {
            throw new Error();
        }
    }
    addCustomerTransaction(id, amount) {
        let customer = this.customers.find(customer => customer.getId() === id);
        if (customer) {
            customer.addTransaction(amount);
            return true;
        }
        else {
            // throw new Error(`Problem occurred, or customer does not exist`)
            console.log(`Problem occurred, or customer does not exist`);
        }
        return false;
    }
    findCustomer(id) {
        const customer = this.customers.find(customer => customer.getId() === id);
        if (customer) {
            return customer;
        }
        else {
            return null;
        }
    }
}
exports.Branch = Branch;
