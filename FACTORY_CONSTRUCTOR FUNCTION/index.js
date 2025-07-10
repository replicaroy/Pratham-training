
// FACTORY FUNCTION----
// function createAccount2 (acName){
//     let balance = 0;

//     return {
//         getBalance(){
//             return `your balance is ${balance}`
//         },
//         getDeposit(amount){
//             return `your account deposited by rs.s ${balance+=amount}`
//         },
//         getWithDrawl(amount){
//          if(amount>balance){
//             return `your account have insufficent balance to withdrawl. current balance is ${balance}.` //
//          }                
//             return `your account Withdrwaled by rs. ${balance-=amount}`
//         }        
//     }
// }
// const newUser = createAccount2('Ramu');

// console.log(newUser.getBalance());  
// console.log(newUser.getDeposit(1000));  
// console.log(newUser.getBalance());  
// console.log(newUser.getWithDrawl(500)); 
// console.log(newUser.getBalance()); 

// // SHORT FACTORY FUNCTION---
// const createAccount = (name) =>{
//     let balance = 0;
//     return{
//        balance: ()=> `your account balance is Rs. ${balance}`,
//        deposit: amount => `your account deposited by Rs. ${amount} and current balance is ${balance+=amount}`,
//        withdrawl: amount => amount > balance ? `withdrawl account is greater than curren ${balance}`
//                                              : ` your account is debited by ${amount} and current balance is ${balance-+amount}`,
//     }
// }

// const userRamu = createAccount('Ramu')
// console.log(userRamu.balance())
// console.log(userRamu.deposit(1000))
// console.log(userRamu.balance())
// console.log(userRamu.withdrawl(300))
// console.log(userRamu.balance())



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
// function CreateAccount1(name) {
//   let balance = 0;
//   this.getBalance = () => `${name} balance: ₹${balance}`;
//   this.deposit = a => `${name} deposited ₹${a}. New balance: ₹${balance += a}`;
//   this.withdraw = a => a > balance
//     ? `${name} insufficient funds to withdraw ₹${a}. Current balance: ₹${balance}`
//     : `${name} withdrew ₹${a}. New balance: ₹${balance -= a}`;
// }
const acc = new CreateAccount('Ramu');

console.log(acc.getBalance());     // Ramu balance: ₹0
console.log(acc.deposit(1000));    // Ramu deposited ₹1000. New balance: ₹1000
console.log(acc.withdraw(500));    // Ramu withdrew ₹500. New balance: ₹500
console.log(acc.withdraw(2000));   // Ramu insufficient funds...
console.log(acc.getBalance());     // Ramu balance: ₹500



// error handling

// const c = new Car ('Tesla');
// console.log("c",instanceof Car)


function User(name,role){
  this.name = name || 'Guest';
  this.role = role ?? 'Guest';
}

const u1 = new User('ramu', 'admin')
const u2 = new User('hari', false )

console.log(u1)
console.log(u2)

























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
