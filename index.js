//Constructors

// function Person(name , age , dob){
//   this.name = name;
//   this.age = age;
//   this.birthday = new Date(dob);
//   this.calcAge = function(){
//     const diff = Date.now() - this.birthday.getTime() ;
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear - 1970);
//   }
// }

// let raj = new Person('raj',19,'10-3-2000');
// console.log(raj.calcAge());


//strings constructors

// var str = new String('jeff');
// console.log(str); //string
// console.log(typeof str); //object

//number 

// const num1 = 5;
// const num2 = new Number(5);
// console.log(num2);
// console.log(typeof num2); //object

//boolean

// const bool1 = true;
// const bool2 = new Boolean(true);
// console.log(bool2);

//function

// const getSum1 = function(x,y){
//   return x+y;
// }
// // console.log(getSum1(1,2));

// const getSum2 = new function('return 1+1');
// console.log(getSum2(1,2));


//objects

// const john1 = {
//   name : 'john';
// }

// const john2 = new Object({name:"john"});

//arrays

// const arr1 = [1,2,3];
// const arr2 new Array(1,2,3,4);

//regular Expressions


//prototypes

// function Person(name , age , dob){
//   this.name = name;
//   this.age = age;
//   this.birthday = new Date(dob);
//   this.calcAge = function(){
//     const diff = Date.now() - this.birthday.getTime() ;
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear - 1970);
//   }
// }

// Person.prototype.calcAge = function(){
//   const diff = Date.now() - this.birthday.getTime() ;
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear - 1970);
// }

// const brad = new Person('john' , 10 , 10-2-2000);
// console.log(brad.calcAge());

//getsmarried

// Person.prototype.getsMarried = function(newLastName){
//   this.name = newLastName;
// }

// brad.getsMarried('smith');
// console.log(brad
//   );

// console.log(brad.hasOwnProperty('name')); //true

//

//prototype inheritance

// function Person(firstName , lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting = function(){
//   return `Hello There ${this.firstName} ${this.lastName}`;
// }

// const raj = new Person('rajat', 'verma');

// console.log(raj.greeting());

// function Customer (firstName , lastName , phone , membership){
//   Person.call(this , firstName , lastName);
//   this.phone = phone ;
//   this.membership = membership;
// }


// //inherit the person prototype method
// Customer.prototype = Object.create(Person.prototype);

// Customer.prototype.greeting = function(){
//   return `Hello There ${this.firstName} ${this.lastName} welcome to the community`;
// }

// const raj = new Customer('rajat','verma',5555555555,'standard');
// console.log(raj.greeting());

//OBJECT.CREATE

// const personPrototypes = {
//   greeting : function(){
//     return `Helllo there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried : function(newLastName){
//     this.lastName = newLastName;
//   }
// };

// const mary = Object.create(personPrototypes);

// mary.firstName = 'mary';
// mary.lastName = 'williams';
// mary.age = 30;

// mary.getsMarried('thomson');

// console.log(mary.greeting());

// //alternative way

// const brad = Object.create(personPrototypes , {
//   firstName : {value:'brad'},
//   lastName : {value:'traversy'},
//   age : {value:30}
// });

// console.log(brad.greeting());

//ES6 classes

// class Person{
//   constructor(firstName, lastName , dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = dob;
//   }
//   greeting(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }

//   // calcAge(){
//   //   const diff = Date.now() - this.birthday.getTime() ;
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear - 1970);
//   // }

//   getsMarried(newLastName){
//     this.lastName = newLastName;
//   }

//   static addNumbers(x , y){
//     return x+y;
//   }
// }

// const brad = new Person('brad' , 'traversy' , 19-1-2000);
// brad.getsMarried('verma');
// console.log(brad.greeting());

// console.log(Person.addNumbers(1,2));

//subclasses

  // class Person{
  //   constructor(firstName, lastName ){
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //   }
  //   greeting(){
  //     return `Hello there ${this.firstName} ${this.lastName}`;
  //   }
  
  // }

  // class Customer extends Person{
  //   constructor(firstName , lastName , phone , ID){
  //     super(firstName , lastName);
  //     this.phone = phone;
  //     this.ID = ID;
  //   }

  //   static getMembershipCost(){
  //     return 500;
  //   }
  // }

  // const Customer1 = new Customer('raj' , 'verma' , '888-888-8888' , 1010);

  // console.log(Customer1);
  // console.log(Customer1.greeting());
  // console.log(Customer.getMembershipCost());

  //Book constructor

  function Book(title , author , isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  //UI constructor 
  function UI(){
  }

  UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');

    //create tr element
    const row = document.createElement('tr');
    //insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href ="#" class="delete">X</a></td>
     `;
     list.appendChild(row);
  }
  //clear fields
  UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  //showalerts
  UI.prototype.showAlert = function(message, className){
    const div = document.createElement('div');
    //add classes
    div.className = `alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent 
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form);
    //timeout afetr 3sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },3000);
  }

  //delete book
  UI.prototype.deleteBook = function(target){
    if(target.className == 'delete'){
      target.parentElement.parentElement.remove();
    }
  }

  //Event Listeners

  document.getElementById('book-form').addEventListener('submit', function(e){
    console.log('test');
    //get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    console.log(title, author ,isbn);

    //instantiate book
    const book = new Book(title , author , isbn);

    //instantiate ui
    const ui = new UI();


    if(title == '' || author == '' || isbn == ''){
      //Error Alert
      ui.showAlert('Please fill in all the fields', 'error');
    }
    else{
    //add book to list
    ui.addBookToList(book);

    //show success
    ui.showAlert('Book Added', 'success');

    //clear fields
    ui.clearFields();
    }

    e.preventDefault();
  });

  //event listener for delete
  document.getElementById('book-list').addEventListener('click', function(e){

    //instantiate ui
    const ui = new UI();
    ui.deleteBook(e.target);

    //show message
    ui.showAlert('Book Removed', 'success');
  });