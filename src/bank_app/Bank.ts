import {Branch} from "./Branch";
import {Customer} from "./Customer";

export class Bank  {
    branches: Branch[];
    constructor(private name: string) {
        this.branches = [];
    }

    addBranch(branch:Branch):boolean  {
        if(this.checkBranch(branch)) {
            console.log(`Branch ${branch.getName()} already exist`);
            return false
        }
        this.branches.push(branch);
        console.log(`Branch '${branch.getName()}' was created successfully.`)
        return true
    }
    addCustomer(branch:Branch, customer:Customer):boolean {
        if(this.checkBranch(branch)) {
            branch.addCustomer(customer);
            return true
        } else {
            console.log(`Branch '${branch.getName()}' does not exist`);
            return false
        }
    }

    addCustomerTransaction(branch:Branch, id:string, amount:number):boolean {
        if(this.checkBranch(branch)) {
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

    }

    findBranchByName(branchName:string):boolean {
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
    }

    checkBranch(branch:Branch):boolean {
        if(branch) {
            let result = this.branches.find(existingBranch => {
                return existingBranch.getName() === branch.getName()
            })
            return Boolean(result)
        }
        return false
    }

    listCustomers(branch:Branch, printList:boolean = false):boolean {
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
    }
}