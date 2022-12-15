"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    constructor(name) {
        this.name = name;
        this.branches = [];
    }
    addBranch(branch) {
        if (this.checkBranch(branch)) {
            console.log(`Branch '${branch.getName()}' already exist`);
            return false;
        }
        this.branches.push(branch);
        console.log(`Branch '${branch.getName()}' was created successfully.`);
        return true;
    }
    addCustomer(branch, customer) {
        if (this.checkBranch(branch)) {
            branch.addCustomer(customer);
            return true;
        }
        else {
            console.log(`Branch '${branch.getName()}' does not exist`);
            return false;
        }
    }
    addCustomerTransaction(branch, id, amount) {
        if (this.checkBranch(branch)) {
            let customer = branch.findCustomer(id);
            if (customer) {
                customer.addTransaction(amount);
                return true;
            }
            else {
                console.log(`Customer id:${id} does not exist on branch '${branch.getName()}'`);
            }
        }
        else {
            console.log(`Branch '${branch.getName()}' does not exist`);
        }
        return false;
    }
    findBranchByName(branchName) {
        const regExp = new RegExp(branchName.toLowerCase(), 'ig');
        const result = this.branches.filter(branch => {
            return branch.getName().toLowerCase().match(regExp);
        });
        if (result.length > 0) {
            let results = result.map(branch => {
                return branch.getName();
            });
            console.log(`We found next branches with your request '${branchName}' : '${results.join(',')}'`);
            return true;
        }
        else {
            console.log(`No results found with your request '${branchName}'`);
        }
        return false;
    }
    checkBranch(branch) {
        if (branch) {
            let result = this.branches.find(existingBranch => {
                return existingBranch.getName() === branch.getName();
            });
            return Boolean(result);
        }
        return false;
    }
    listCustomers(branch, printList = false) {
        if (this.checkBranch(branch)) {
            if (printList) {
                let customers = branch.getCustomers();
                customers.map(customer => {
                    if (customer.getTransactions().length > 0) {
                        console.log(`Customer ${customer.getName()}(id: ${customer.getId()}) transactions: `);
                        customer.getTransactions().map(transaction => {
                            const day = transaction.date.getDate();
                            const year = transaction.date.getFullYear();
                            const month = transaction.date.getMonth() + 1;
                            const hours = transaction.date.getHours();
                            const minutes = transaction.date.getMinutes();
                            console.log(`'Amount: ${transaction.amount}, Date: ${hours}:${minutes}, ${day}.${month}.${year}'`);
                        });
                    }
                    else {
                        console.log(`Customer ${customer.getName()}(id: ${customer.getId()}): 'No transactions' `);
                    }
                });
            }
            return true;
        }
        return false;
    }
}
exports.Bank = Bank;
