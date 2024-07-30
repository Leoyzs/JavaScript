// Define a classe Book
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

// Define a classe Library
class Library {
    constructor() {
        this.books = []; // Array para armazenar os livros
    }

    // Método para adicionar um livro à biblioteca
    addBook(book) {
        this.books.push(book);
    }

    // Método para mostrar as propriedades de cada livro no console
    showBooks() {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}`);
        });
    }
}

// Cria alguns objetos book
const book1 = new Book('1984', 'George Orwell');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee');
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald');

// Cria um objeto library e adiciona os livros
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Mostra as propriedades de cada livro no console
library.showBooks();
