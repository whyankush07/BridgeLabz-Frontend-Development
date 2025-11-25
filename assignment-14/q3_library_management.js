class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      console.log(`Book "${this.title}" is already issued`);
      return false;
    } else {
      this.isIssued = true;
      console.log(`Book "${this.title}" has been issued successfully`);
      return true;
    }
  }

  returnBook() {
    if (!this.isIssued) {
      console.log(`Book "${this.title}" was not issued`);
      return false;
    } else {
      this.isIssued = false;
      console.log(`Book "${this.title}" has been returned successfully`);
      return true;
    }
  }

  displayInfo() {
    const status = this.isIssued ? "Issued" : "Available";
    return `Title: ${this.title}\nAuthor: ${this.author}\nISBN: ${this.isbn}\nStatus: ${status}\n`;
  }
}

const library = [
  new Book("The Great Gatsby", "F. Scott Fitzgerald", "ISBN-001"),
  new Book("To Kill a Mockingbird", "Harper Lee", "ISBN-002"),
  new Book("1984", "George Orwell", "ISBN-003", true),
  new Book("Pride and Prejudice", "Jane Austen", "ISBN-004"),
  new Book("Harry Potter", "J.K. Rowling", "ISBN-006", true),
];

console.log("Library Management System\n");

console.log("All Books:");
library.forEach((book) => console.log(book.displayInfo()));

// Display available books
console.log("\nAvailable Books:");
const availableBooks = library.filter((book) => !book.isIssued);
availableBooks.forEach((book) => console.log(book.displayInfo()));

// Search and issue a book by ISBN
const issueBookByISBN = (isbn) => {
  console.log(`\nSearching for ISBN: ${isbn}`);

  const book = library.find((b) => b.isbn === isbn);

  if (!book) {
    console.log(`No book found with ISBN: ${isbn}`);
    return false;
  }

  console.log(`Found: "${book.title}" by ${book.author}`);
  return book.issueBook();
};

issueBookByISBN("ISBN-004");
issueBookByISBN("ISBN-003");

console.log("\nReturning a book:");
library.find((b) => b.isbn === "ISBN-003").returnBook();

console.log("\nUpdated Available Books:");
const updatedAvailable = library.filter((book) => !book.isIssued);
console.log(
  `Total available: ${updatedAvailable.length} out of ${library.length}`
);
updatedAvailable.forEach((book) => console.log(book.displayInfo()));
