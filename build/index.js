"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Branch_1 = require("./Branch");
const Customer_1 = require("./Customer");
const Bank_1 = require("./Bank");
const arizonaBank = new Bank_1.Bank("Arizona");
const westBranch = new Branch_1.Branch("West Branch");
const sunBranch = new Branch_1.Branch("Sun Branch");
const customer1 = new Customer_1.Customer("John");
const customer2 = new Customer_1.Customer("Anna");
const customer3 = new Customer_1.Customer("John");
console.log(`START`);
arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);
console.log(`--------`);
arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");
arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);
// //
console.log(`--------`);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000);
customer1.addTransaction(-1000);
customer1.getBalance();
console.log(`--------`);
arizonaBank.listCustomers(westBranch, true);
arizonaBank.listCustomers(sunBranch, true);
console.log('END');
