// 🧠 Task 2: Using fetch() with .then()
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

