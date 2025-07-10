// function Person(name, age){
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function(){
//   console.log("Hello, may name is " + this.name)
//   console.log("Hello, may name is " + this.name)
// };


// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const person1 = new Person("Alice", 30);
// person1.greet();


// class Employee extends Person {
//   constructor(name,age, jobTitle){
//     super(name, age);
//     this.jobTitle = jobTitle;
//   }
//   describejob(){
//     console.log(`${this.name} works as a ${this.jobTitle}}`)
//   }
// }

// const Employee1 = new Employee('Ramu', 35, "SoftWare Engineer");
// Employee1.greet();
// employee1.describejob();

// class BankAccount {
//   #balance = 0;
//   deposit(amount){
//     if(money>0)this.#balance += amount
//   }
//   getBalance(){
//     return this.#balance;
//   }
// }

// const account =new BankAccount();
// account.deposit(100);
// console.log(account.getBalance());

// class Animal {
//     speak(){console.log("Animal makes a sound")}
// }
// class Dog extends Animal {
//     speak(){console.log("Dog barks")}
// }
// class Cat extends Animal {
//     speak(){console.log("Car meows")}
// }

// const animals = [new Dog(), new Cat()];
// animals.forEach(animal=> animal.speak())


// class Car{
//     #engineStarted = false;
//     #checkEngine(){
//         console.log("Running engine diagnostics...")
//         return true;
//     }
//     startTransition(){
//         if(this.#checkEngine()){
//             this.#engineStarted = true;
//             console.log("Engine started successfully");
//         }
//     }
//     drive(){
//         if(this.#engineStarted){
//             console.log("Car is moving...");
//         }else{
//             console.log("Please start the car first");
//         }
//     }
// }
// const myCar = new Car();
// myCar.startTransition();
// myCar.drive();

class Book {
  constructor(title, author, isRead = false) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
  }

  toggleReadStatus() {
    this.isRead = !this.isRead;
  }

  info() {
    return `${this.title} by ${this.author} - ${this.isRead ? "Read" : "Unread"}`;
  }
}

// 📦 Library Class with Encapsulation and localStorage
class Library {
  #books = [];

  constructor() {
    this.loadFromStorage();
  }

  addBook(book) {
    this.#books.push(book);
    this.saveToStorage();
  }

  removeBook(title) {
    this.#books = this.#books.filter(book => book.title !== title);
    this.saveToStorage();
  }

  toggleBookReadStatus(title) {
    const book = this.#books.find(book => book.title === title);
    if (book) {
      book.toggleReadStatus();
      this.saveToStorage();
    }
  }

  listBooks() {
    return this.#books;
  }

  saveToStorage() {
    localStorage.setItem("library", JSON.stringify(this.#books));
  }

  loadFromStorage() {
    const data = JSON.parse(localStorage.getItem("library")) || [];
    this.#books = data.map(b => new Book(b.title, b.author, b.isRead));
  }
}





const library = new Library();
const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

function renderBooks() {
  bookList.innerHTML = "";
  library.listBooks().forEach(book => {
    const div = document.createElement("div");
    div.classList.add("book");
    div.textContent = book.info();

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Read";
    toggleBtn.onclick = () => {
      library.toggleBookReadStatus(book.title);
      renderBooks();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.onclick = () => {
      library.removeBook(book.title);
      renderBooks();
    };

    div.append(toggleBtn, deleteBtn);
    bookList.appendChild(div);
  });
}

// Handle form submission
bookForm.onsubmit = e => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();

  if (title && author) {
    const newBook = new Book(title, author);
    library.addBook(newBook);
    renderBooks();
    bookForm.reset();
  }
};

renderBooks();