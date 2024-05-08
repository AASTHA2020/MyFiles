const productList = document.getElementById('productList');

// Function to fetch products from the API
async function fetchProducts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('Failed to fetch products');
    const products = await response.json();
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.textContent = product.title;
      productList.appendChild(productDiv);
      
    });
    
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Call the fetchProducts function
fetchProducts();
