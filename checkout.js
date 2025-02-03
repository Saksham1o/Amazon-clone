function displayProducts() {
    const productList = document.getElementById('product-list');
    const totalPriceElement = document.getElementById('price');
    let totalPrice = 0;
    const products = JSON.parse(localStorage.getItem('cart')) || [];
    if (products.length === 0) {
        productList.innerHTML = '<p>No products in the cart.</p>';
        totalPriceElement.innerHTML = '';
        return;
    }
    productList.innerHTML = '';
    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <span>${product.name}</span>
            <span>Price: ₹${product.price}</span>
            <i class="fas fa-trash delete-icon" onclick="deleteProduct(${index})"></i>
        `;
        productList.appendChild(productDiv);
        totalPrice += product.price;
    });
    totalPriceElement.innerHTML = `<h2>Total Price: ₹${totalPrice}</h2>`;
}

function deleteProduct(index) {
    const products = JSON.parse(localStorage.getItem('cart')) || [];
    products.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(products));
    displayProducts();
}

window.onload = displayProducts;

const placeOrderBtn = document.getElementById('place-order');
const orderConfirmation = document.getElementById('order-confirmation');

placeOrderBtn.addEventListener('click', () => {
  orderConfirmation.style.display = 'block';
});