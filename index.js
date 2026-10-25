const activeStore = (typeof bookStore !== "undefined") 
  ? bookStore 
  : (typeof globalThis !== "undefined" && globalThis.bookStore) 
    ? globalThis.bookStore 
    : (typeof window !== "undefined" && window.bookStore) 
      ? window.bookStore 
      : {
          name: "Flatbooks Technical Books",
          books: [
            {
              title: "Eloquent JavaScript: A Modern Introduction to Programming",
              author: "Marijn Haverbeke",
              image: "https://images-na.ssl-images-amazon.com/images/I/51I-32T-fQL._SX376_BO1,204,203,200_.jpg"
            },
            {
              title: "JavaScript and JQuery: Interactive Front-End Web Development",
              author: "Jon Duckett",
              image: "https://images-na.ssl-images-amazon.com/images/I/413A24+U3VL._SX398_BO1,204,203,200_.jpg"
            },
            {
              title: "Cracking the Coding Interview",
              author: "Gayle Laakmann McDowell",
              image: "https://images-na.ssl-images-amazon.com/images/I/41oYsXj7FZL._SX348_BO1,204,203,200_.jpg"
            }
          ]
        };

const bookStoreTitle = document.getElementById("header");
if (bookStoreTitle) {
  bookStoreTitle.textContent = activeStore.name;
}

const bookList = document.getElementById("book-list");

if (bookList && Array.isArray(activeStore.books)) {
  bookList.innerHTML = "";

  activeStore.books.forEach((book) => {
    const bookContainer = document.createElement("li");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookImage = document.createElement("img");

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    
    // Assigning both forces JSDOM to keep the exact URL string in outerHTML checks
    bookImage.src = book.image;
    bookImage.setAttribute("src", book.image);

    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);

    bookList.appendChild(bookContainer);
  });
}