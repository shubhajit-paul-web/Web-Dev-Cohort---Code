// Book class
class Book {
    constructor(title, author, isbn, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = isAvailable;
    }
}

// Library class
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(isbn) {
        for(let index in this.books) {
            if (this.books[index].isbn === isbn) {
                this.books.splice(index, 1);
                return;
            }
        }
        console.warn("ISBN number is not found!")
    }

    listAvailableBooks() {
        console.log("📚 Available Books:");
        
        this.books.forEach(function(book) {
            if (book.isAvailable) {
                console.log(`- ${book.title} by ${book.author} (ISBN: ${book.isbn})`);
            }
        });
    }

    issueBook(isbn) {
        for(let book of this.books) {
            if (book.isbn === isbn) {
                book.isAvailable = false;
                return;
            }
        }
        console.warn("This book is not present in the Library!");
    }

    returnBook(isbn) {
        for(let book of this.books) {
            if (book.isbn === isbn) {
                book.isAvailable = true;
                return;
            }
        }
        console.warn("This book is not present in the Library!");
    }
}

const book1 = new Book("Atomic Habits", "James Clear", 9780143453604);
const book2 = new Book("The Alchemist", "Paulo Coelho", 9780061122415);
const book3 = new Book("Deep Work", "Cal Newport", 9781455586691);
const book4 = new Book("Think and Grow Rich", "Napoleon Hill", 9780449214923, false);
const book5 = new Book("Rich Dad Poor Dad", "Robert T. Kiyosaki", 9781612680194);

// Library
const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

library.removeBook(9780143453604)

library.returnBook(9780449214923);

library.listAvailableBooks();
