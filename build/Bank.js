"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    constructor(name) {
        this.name = name;
        this.branches = [];
    }
    addBranch(branch) {
        try {
            let result = this.branches.find(existingBranch => existingBranch.getName().toLowerCase() === branch.getName().toLowerCase());
            if (result) {
                console.log(`Branch ${branch.getName()} already exist`);
                return false;
            }
            this.branches.push(branch);
            console.log(`Branch '${branch.getName()}' was created successfully.`);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    addCustomer(branch, customer) {
        try {
            let result = this.branches.find(existingBranch => existingBranch.getName().toLowerCase() === branch.getName().toLowerCase());
            if (result) {
                branch.addCustomer(customer);
                return true;
            }
            else {
                console.log(`Branch '${branch.getName()}' does not exist`);
                return false;
            }
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
    addCustomerTransaction(branch, id, amount) {
        try {
            let result = this.branches.find(existingBranch => existingBranch.getName().toLowerCase() === branch.getName().toLowerCase());
            if (result) {
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
        catch (e) {
            console.log(e);
            return false;
        }
    }
    findBranchByName(branchName) {
        try {
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
        catch (e) {
            console.log(e);
            return false;
        }
    }
    checkBranch(branch) {
        try {
            this.branches.find(existingBranch => {
                if (existingBranch.getName() === branch.getName()) {
                    console.log(`Branch was found.`);
                    return true;
                }
            });
            return false;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
    listCustomers(branch, printList = false) {
        try {
            this.branches.find(existingBranch => {
                if (existingBranch.getName() === branch.getName()) {
                    if (printList) {
                        let customers = existingBranch.getCustomers();
                        customers.map(customer => {
                            if (customer.getTransactions().length > 0) {
                                console.log(`Customer ${customer.getName()}(id: ${customer.getId()}) transactions: `);
                                customer.getTransactions().map(transaction => {
                                    console.log(transaction);
                                });
                            }
                            else {
                                console.log(`Customer ${customer.getName()}(id: ${customer.getId()}): 'No transactions' `);
                            }
                        });
                    }
                    return true;
                }
            });
            return false;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
}
exports.Bank = Bank;
