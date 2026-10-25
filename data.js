var bookStore = {
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

if (typeof window !== "undefined") window.bookStore = bookStore;
if (typeof globalThis !== "undefined") globalThis.bookStore = bookStore;
if (typeof global !== "undefined") global.bookStore = bookStore;
