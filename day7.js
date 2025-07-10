const user1 = {
    name: 'Ramu'
}
const user2 = {
    name: 'Sunil'
}

function sayHello(age,city){
      console.log(`Hello I am ${this.name}, ${age} year old from ${city}.` )
}

// sayHello.call(user1,19, 'Jaipur');
// sayHello.apply(user1, [19, 'Jaipur']);

// const sayHello1 = sayHello.bind(user1, 19, 'Jaipur');
// sayHello1()

const person = {
    name: 'Jonh Doe'
}
function greet(age,city){
    console.log(`Hello, my name is ${this.name}, age ${age} and city ${city}`)
}
const newGreet = greet.bind(person)
// newGreet(27, 'jaipur')




const Person = {
    fullname(){
        return `${this.first} - ${this.last}`
    }
}

const anotherPerson ={
    first: 'John',
    last: 'Doe'
}

const name = Person.fullname.call(anotherPerson)
// console.log(name)


// FACTORY FUNCTION----
function createAccount2 (acName){
    let balance = 0;

    return {
        getBalance(){
            return `your balance is ${balance}`
        },
        getDeposit(amount){
            return `your account deposited by rs.s ${balance+=amount}`
        },
        getWithDrawl(amount){
         if(amount>balance){
            return `your account have insufficent balance to withdrawl. current balance is ${balance}.` //
         }                
            return `your account Withdrwaled by rs. ${balance-=amount}`
        }        
    }
}
const newUser = createAccount2('Ramu');

console.log(newUser.getBalance());  
console.log(newUser.getDeposit(1000));  
console.log(newUser.getBalance());  
console.log(newUser.getWithDrawl(500)); 
console.log(newUser.getBalance()); 

// SHORT FACTORY FUNCTION---
const createAccount = (name) =>{
    let balance = 0;
    return{
       balance: ()=> `your account balance is Rs. ${balance}`,
       deposit: amount => `your account deposited by Rs. ${amount} and current balance is ${balance+=amount}`,
       withdrawl: amount => amount > balance ? `withdrawl account is greater than curren ${balance}`
                                             : ` your account is debited by ${amount} and current balance is ${balance-+amount}`,
    }
}

const userRamu = createAccount('Ramu')
console.log(userRamu.balance())
console.log(userRamu.deposit(1000))
console.log(userRamu.balance())
console.log(userRamu.withdrawl(300))
console.log(userRamu.balance())



// CONSTRUCTER FUNCTION-----
function CreateAccount(name) {
  this.name = name;
  this.balance = 0;

  this.getBalance = function () {
    return `${this.name} balance: ₹${this.balance}`;
  };

  this.deposit = function (amount) {
    this.balance += amount;
    return `${this.name} deposited ₹${amount}. New balance: ₹${this.balance}`;
  };

  this.withdraw = function (amount) {
    if (amount > this.balance) {
      return `${this.name} insufficient funds to withdraw ₹${amount}. Current balance: ₹${this.balance}`;
    }
    this.balance -= amount;
    return `${this.name} withdrew ₹${amount}. New balance: ₹${this.balance}`;
  };
}

// SHORT CONSTRUCTER FUNCTION-------































// function createAccount(name, initialBalance) {
//   let balance = initialBalance;

//   return {
//     name,

//     getBalance() {
//       return {
//         name: this.name,
//         balance,
//       };
//     },

//     withdraw(amount) {
//       if (amount > balance) {
//         return 'Insufficient funds';
//       }
//       balance -= amount;
//       return `Withdrew ₹${amount}. New balance: ₹${balance}`;
//     },

//     deposit(amount) {
//       balance += amount;
//       return `Deposited ₹${amount}. New balance: ₹${balance}`;
//     },
//   };
// }

// // Create one account
// const account = createAccount('Ramu', 100);

// // Use account methods
// console.log(account.getBalance());             // { name: 'Ramu', balance: 100 }
// console.log(account.withdraw(30));            // Withdrew ₹30. New balance: ₹70
// console.log(account.getBalance());            // { name: 'Ramu', balance: 70 }
// console.log(account.deposit(200));            // Deposited ₹200. New balance: ₹270
// console.log(account.getBalance());            // { name: 'Ramu', balance: 270 }
