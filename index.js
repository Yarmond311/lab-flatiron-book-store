const bookStoreTitle = document.getElementById("header");
bookStoreTitle.textContent = bookStore.name;

const bookList = document.getElementById("book-list");

bookStore.books.forEach((book) => {
  const bookContainer = document.createElement("li");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("p");
  const bookImage = document.createElement("img");

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.image;

  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);

  bookList.appendChild(bookContainer);
});
