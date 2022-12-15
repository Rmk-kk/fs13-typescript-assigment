# TypeScript Assigment

![Generic badge](https://img.shields.io/badge/JS-ES5-yellow.svg)
![Generic badge](https://img.shields.io/badge/TS-v.4.9-blue.svg)

## Technologies

* API - [Fake Store API](https://fakeapi.platzi.com/)
* TypeScript
* JS
    * Async/ Await
    * Classes
    * Methods Map, Find, Sort, Filter, Includes + Custom

### Task 1 - Bank Logic 

<details >
<summary>Open Result</summary>

``` bash
TASK 1
START
Branch 'West Branch' was created successfully.
Branch 'Sun Branch' was created successfully.
Branch 'West Branch' already exist
--------
No results found with your request 'bank'
We found next branches with your request 'sun' : 'Sun Branch'
Customer John, id-419 was successfully added to branch 'West Branch'
Customer John, id-13 was successfully added to branch 'West Branch'
Customer John, id-419 was successfully added to branch 'Sun Branch'
--------
Customer John(id: 419) transactions:
'Amount: 3000, Date: 17:27, 15.12.2022'
'Amount: 2000, Date: 17:27, 15.12.2022'
'Amount: -1000, Date: 17:27, 15.12.2022'
Customer John(id: 13): 'No transactions'
Customer John(id: 419) transactions:
'Amount: 3000, Date: 17:27, 15.12.2022'
'Amount: 2000, Date: 17:27, 15.12.2022'
'Amount: -1000, Date: 17:27, 15.12.2022'
Customer Anna(id: 361): 'No transactions'
END
```
</details>

### Task 2 - Classes in TS with API

<details >
<summary>Open Result</summary>

``` bash
0
1
{
  id: 1,
  email: 'john@mail.com',
  password: 'changeme',
  name: 'Jhon',
  role: 'customer',
  avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=2930'
}
List(5) [
  {
    id: 100,
    email: 'henry@gmail.com',
    password: 'henry',
    name: 'Henry',
    role: 'customer',
    avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=6751'
  },
  {
    id: 90,
    email: 'william@gmail.com',
    password: 'william',
    name: 'William',
    role: 'customer',
    avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=6751'
  },
  {
    id: 3,
    email: 'admin@mail.com',
    password: 'admin123',
    name: 'Admin',
    role: 'admin',
    avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=4'
  },
  {
    id: 2,
    email: 'maria@mail.com',
    password: '12345',
    name: 'Maria',
    role: 'customer',
    avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=8914'
  },
  {
    id: 1,
    email: 'john@mail.com',
    password: 'changeme',
    name: 'Jhon',
    role: 'customer',
    avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=2930'
  }
]
```
</details>

## Project Structure

<details>
<summary>Open Project Structure</summary>

``` bash
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.json
│
├───build
│   │   index.js
│   │
│   ├───bank_app
│   │       Bank.js
│   │       Branch.js
│   │       Customer.js
│   │       Transaction.js
│   │
│   └───types
│       │   ecommerce.js
│       │
│       └───interfaces
│               entity.js
│               ProductStore.js
│               StoreError.js
│               UserStore.js
└───src
    │   index.ts
    │
    ├───bank_app
    │       Bank.ts
    │       Branch.ts
    │       Customer.ts
    │       Transaction.ts
    │
    └───types
        │   ecommerce.ts
        │
        └───interfaces
                entity.ts
                ProductStore.ts
                StoreError.ts
                UserStore.ts

```
</details>

## Getting Started

Clone the repository from GitHub with `git clone `. <br>
Check repository on `https://github.com/Rmk-kk/fs13-typescript-assigment`

