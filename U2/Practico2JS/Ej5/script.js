// JSON data sin datos persisitentes
let libros = [
{
  "id": "978-0641723445",
  "label": ["book", "hardcover"],
  "name": "The Lightning Thief",
  "author": "Rick Riordan",
  "series_t": "Percy Jackson and the Olympians",
  "genre_s": "fantasy",
  "inStock": false,
  "price": 12,
  "pages_i": 384
},
{
  "id": "978-1857995879",
  "label": ["book", "paperback"],
  "name": "Sophie's World : The Greek Philosophers",
  "author": "Jostein Gaarder",
  "genre_s": "fantasy",
  "inStock": true,
  "price": 3,
  "pages_i": 64
},
{
  "id": "978-1933988177",
  "label": ["Article", "paperback"],
  "name": "Lucene in Action, Second Edition",
  "author": "Michael McCandless",
  "genre_s": "IT",
  "inStock": true,
  "price": 30,
  "pages_i": 475
}
];
console.log(typeof libros);

// Function to add a new book
function crearLibro() {
  const id = document.getElementById('id').value;
  const label = document.getElementById('label').value.split(',');
  const name = document.getElementById('name').value;
  const author = document.getElementById('author').value;
  const genre = document.getElementById('genre').value;
  const inStock = document.getElementById('inStock').checked;
  const price = parseFloat(document.getElementById('price').value);
  const pages = parseInt(document.getElementById('pages').value);

  const nuevoLibro = {
    "id": id,
    "label": label,
    "name": name,
    "author": author,
    "genre_s": genre,
    "inStock": inStock,
    "price": price,
    "pages_i": pages
  };

  libros.push(nuevoLibro);
  document.getElementById('id').value = '';
  document.getElementById('label').value = '';
  document.getElementById('name').value = '';
  document.getElementById('author').value = '';
  document.getElementById('genre').value = '';
  document.getElementById('inStock').checked = false;
  document.getElementById('price').value = '';
  document.getElementById('pages').value = '';
  
}


// Function para mostrar todos los libros
function mostrarLibros() {
  const mostrarTodos = document.getElementById('todosLibros');
  mostrarTodos.innerHTML = '';
  libros.forEach(data => {
    const lista = document.createElement('li');
    lista.textContent = `${data.name}, Autor: ${data.author}, Precio: ${data.price}, Stock: ${data.inStock ? 'Si' : 'No'}`;
    mostrarTodos.appendChild(lista);
  });
}

// Function filtrar por precios
function showBooksAbovePrice() {
  const priceFilter = parseFloat(document.getElementById('priceFilter').value);
  const booksAbovePriceElement = document.getElementById('booksAbovePrice');
  booksAbovePriceElement.innerHTML = '';
  const filteredBooks = libros.filter(data => data.price > priceFilter);
  filteredBooks.forEach(data => {
    const li = document.createElement('li');
    li.textContent = `${data.name} por ${data.author}`;
    booksAbovePriceElement.appendChild(li);
  });
  document.getElementById('priceFilter').value='';
}

// Function to display books by label
function showBooksByLabel() {
  const labelFilter = document.getElementById('labelFilter').value;
  const booksByLabelElement = document.getElementById('booksByLabel');
  booksByLabelElement.innerHTML = '';
  const filteredBooks = books.filter(book => book.label.includes(labelFilter));
  filteredBooks.forEach(book => {
    const li = document.createElement('li');
    li.textContent = `${book.name} por ${book.author}`;
    booksByLabelElement.appendChild(li);
  });
  document.getElementById('labelFilter').value='';
}
