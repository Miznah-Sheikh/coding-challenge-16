//  Task 2: Using fetch() with .then()
function fetchProductsThen() {
  fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Product names (using .then()):');
      data.forEach(product => {
        console.log(product.fields.name);
      });
    })
    .catch(error => {
      handleError(error);
    });
}

// Task 3: Using async/await with try/catch
async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

//  Task 4: Display the first 5 products
function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  products.slice(0, 5).forEach(product => {
    const { name, price, image } = product.fields;

    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
      <img src="${image[0].url}" alt="${name}">
      <h3>${name}</h3>
      <p>$${(price / 100).toFixed(2)}</p>
    `;

    container.appendChild(productElement);
  });
}

//  Task 5: Reusable error handler
function handleError(error) {
  console.error('An error occurred:', error.message);
}