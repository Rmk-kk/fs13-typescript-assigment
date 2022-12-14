"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = String(Math.floor(Math.random() * 1000));
        this.transactions = [];
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getTransactions() {
        return this.transactions;
    }
    getBalance() {
        let currBalance = 0;
        this.transactions.map(transaction => {
            return currBalance += transaction.amount;
        });
        if (currBalance < 0) {
            currBalance = 0;
        }
        console.log(`Balance: ${currBalance}`);
        return currBalance;
    }
    addTransaction(amount) {
        this.transactions.push({ amount, date: new Date() });
        if (amount > 0) {
            console.log(`Successfully added ${amount} to ${this.name}'s(id:${this.id}) account`);
        }
        else if (amount < 0) {
            console.log(`Successfully withdrew ${String(amount).substring(1)} from ${this.name}'s(id:${this.id}) account`);
        }
        return true;
    }
}
exports.Customer = Customer;
