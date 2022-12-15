"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ecommerce_1 = require("./types/ecommerce");
//TAsk 1
// const arizonaBank = new Bank("Arizona")
// const westBranch = new Branch("West Branch")
// const sunBranch = new Branch("Sun Branch")
// const customer1 = new Customer("John")
//
// const customer2 = new Customer("Anna")
//
// const customer3 = new Customer("John")
//
// console.log('TASK 1')
// console.log(`START`)
// arizonaBank.addBranch(westBranch)
// arizonaBank.addBranch(sunBranch)
// arizonaBank.addBranch(westBranch)
// console.log(`--------`)
// arizonaBank.findBranchByName("bank")
// arizonaBank.findBranchByName("sun")
//
// arizonaBank.addCustomer(westBranch, customer1)
// arizonaBank.addCustomer(westBranch, customer3)
// arizonaBank.addCustomer(sunBranch, customer1)
// arizonaBank.addCustomer(sunBranch, customer2)
// // //
// console.log(`--------`)
// arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000)
// arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000)
// arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000)
//
// customer1.addTransaction(-1000)
// customer1.getBalance();
// console.log(`--------`)
// arizonaBank.listCustomers(westBranch, true)
// arizonaBank.listCustomers(sunBranch,true)
// console.log('END')
// console.log(`--------`)
// console.log('TASK 2')
//TASK 2
const products = new ecommerce_1.List();
const users = new ecommerce_1.List();
// users.fetchAll("https://api.escuelajs.co/api/v1/users")
console.log('------START--------');
async function app() {
    await users.fetchAll("https://api.escuelajs.co/api/v1/users");
    const testPush1 = users.push({
        id: 1,
        email: "william@gmail.com",
        password: "william",
        name: "William",
        role: "customer",
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
    }, {
        id: 90,
        email: "henry@gmail.com",
        password: "henry",
        name: "Henry",
        role: "customer",
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
    });
    const testPush2 = users.push({
        id: 90,
        email: "william@gmail.com",
        password: "william",
        name: "William",
        role: "customer",
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
    }, {
        id: 100,
        email: "henry@gmail.com",
        password: "henry",
        name: "Henry",
        role: "customer",
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
    });
    console.log(testPush1); // expect to see 0
    console.log(testPush2); // expect to see 1
    console.log(users);
}
app();
