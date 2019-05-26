//class Book
class Book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//class ui
class UI{
  addBookToList(book){
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
  
  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  showAlert(message, className){
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

  deleteBook(target){
    if(target.className == 'delete'){
      target.parentElement.parentElement.remove();
    }
  }
}

//store class(local storage class)

class Store{
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    }
    else{
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks(){
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui = new UI();

      //add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook(book){
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn){

    const books = Store.getBooks();

    books.forEach(function(book, index){
       if(book.isbn == isbn){
         books.splice(index, 1);
       }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

//dom load event
  document.addEventListener('DOMContentLoaded', Store.displayBooks);
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

  //add to LS
  Store.addBook(book);

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

  //remove from ls
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  //show message
  ui.showAlert('Book Removed', 'success');
});