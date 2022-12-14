import {Transaction} from "../Transaction";

export class Customer {
    private id:string;
    private transactions:Transaction[];

    constructor(private name:string) {
        this.name = name;
        this.id = String(Math.floor(Math.random() * 1000));
        this.transactions = [];
    }

    getName():string {
        return this.name
    }

    getId():string {
        return this.id
    }

    getTransactions():Transaction[] {
        return this.transactions
    }

    getBalance():number {
        let currBalance:number = 0;
        this.transactions.map(transaction => {
            return currBalance += transaction.amount;
        })
        if(currBalance < 0) {
            currBalance = 0;
        }
        console.log(`Balance: ${currBalance}`);
        return currBalance;
    }

    addTransaction(amount:number):boolean {
        this.transactions.push({amount, date: new Date()})
        if(amount > 0) {
            console.log(`Successfully added ${amount} to ${this.name}'s(id:${this.id}) account`)
        } else if(amount < 0) {
            console.log(`Successfully withdrew ${String(amount).substring(1)} from ${this.name}'s(id:${this.id}) account`)
        }
        return true
    }
}