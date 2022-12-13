import {Branch} from "./Branch";
import {Customer} from "./Customer";

export class Bank  {
    branches: Branch[];
    constructor(private name: string) {
        this.branches = [];
    }

    addBranch(branch:Branch):boolean  {
        try {
            let result = this.branches.find(existingBranch => existingBranch.getName().toLowerCase() === branch.getName().toLowerCase());
            if(result) {
                console.log(`Branch ${branch.getName()} already exist`);
                return false
            }
            this.branches.push(branch);
            console.log(`Branch '${branch.getName()}' was created successfully.`)
            return true
        } catch (e) {
            return false
        }
    }
    addCustomer(branch:Branch, customer:Customer):boolean {
        try {
            let result =  this.branches.find(existingBranch => existingBranch.getName().toLowerCase() === branch.getName().toLowerCase());
            if(result) {
                branch.addCustomer(customer);
                return true
            } else {
                console.log(`Branch '${branch.getName()}' does not exist`);
                return false
            }
        }  catch (e) {
            console.log(e)
            return false
        }
    }

    addCustomerTransaction(branch:Branch, id:string, amount:number):boolean {
        try {
            let result =  this.branches.find(existingBranch => existingBranch.getName().toLowerCase() === branch.getName().toLowerCase());
                if(result) {
                    let customer = branch.findCustomer(id);
                    if(customer) {
                        customer.addTransaction(amount)
                        return true
                    } else {
                        console.log(`Customer id:${id} does not exist on branch '${branch.getName()}'`)
                    }
                } else {
                    console.log(`Branch '${branch.getName()}' does not exist`);
                }
            return false
        } catch (e) {
            console.log(e)
            return false
        }
    }

    findBranchByName(branchName:string):boolean {
        try {
            const regExp = new RegExp(branchName.toLowerCase(), 'ig');
            const result = this.branches.filter(branch => {
                return branch.getName().toLowerCase().match(regExp)
            })
            if(result.length > 0) {
                let results = result.map(branch => {
                    return branch.getName()
                })
                console.log(`We found next branches with your request '${branchName}' : '${results.join(',')}'`);
                return true
            } else {
                console.log(`No results found with your request '${branchName}'`)
            }
            return false
        } catch (e) {
            console.log(e);
            return false
        }
    }

    checkBranch(branch:Branch):boolean {
        try {
            this.branches.find(existingBranch => {
                if(existingBranch.getName() === branch.getName()) {
                    console.log(`Branch was found.`)
                    return true
                }
            })
            return false
        } catch (e) {
            console.log(e);
            return false
        }
    }

    listCustomers(branch:Branch, printList:boolean = false):boolean {
        try {
            this.branches.find(existingBranch => {
                if(existingBranch.getName() === branch.getName()) {
                    if(printList) {
                        let customers = existingBranch.getCustomers();
                        customers.map(customer => {
                            if(customer.getTransactions().length > 0) {
                                console.log(`Customer ${customer.getName()}(id: ${customer.getId()}) transactions: `)
                                customer.getTransactions().map(transaction => {
                                    console.log(transaction)
                                })
                            } else {
                                console.log(`Customer ${customer.getName()}(id: ${customer.getId()}): 'No transactions' `)
                            }
                        })
                    }
                    return true
                }
            })
            return false
        } catch (e) {
            console.log(e);
            return false
        }
    }
}