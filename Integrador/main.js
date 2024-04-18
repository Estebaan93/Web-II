async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  const productsData = await response.json();

  const productGrid = document.querySelector('.product-grid');

  productsData.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.classList.add('product-image');
    productImage.src = product.image;
    productCard.appendChild(productImage);

    const productTitle = document.createElement('h3');
    productTitle.classList.add('product-title');
    productTitle.textContent = product.title;
    productCard.appendChild(productTitle);

    const productDescription = document.createElement('p');
    productDescription.classList.add('product-description');
    productDescription.textContent = product.description.substring(0, 30) + '...';
    productCard.appendChild(productDescription);

    const productCategory = document.createElement('p');
    productCategory.classList.add('product-category');
    productCategory.textContent = product.category;
    productCard.appendChild(productCategory);

    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.textContent = `$${product.price}`;
    productCard.appendChild(productPrice);

    productGrid.appendChild(productCard);
  });
}

fetchProducts();
