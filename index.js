const bookStoreTitle = document.getElementById('header');
if (bookStoreTitle) {
  bookStoreTitle.textContent = bookStore.name;
}

const bookList = document.querySelector('#book-list') || document.querySelector('ul') || document.body;

bookStore.books.forEach((book) => {
  const bookContainer = document.createElement('li');

  const bookTitle = document.createElement('h3');
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = book.author;

  const bookImage = document.createElement('img');
  bookImage.src = book.image;

  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);

  bookList.appendChild(bookContainer);
});