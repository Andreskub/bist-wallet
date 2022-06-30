const $products = document.querySelector(".products");
const $cart = document.querySelector(".cart-items");
const $subtotal = document.querySelector(".subtotal");
const $totalItems = document.querySelector(".total-items-in-cart");
let productos;

async function getDb() {
    const data = await fetch('js/data.json');
    productos = await data.json();
    renderInvestments();
}

async function renderInvestments() {
    await productos.forEach((product) => {
      $products.innerHTML += `
                    <div class="card col-md-4 displayProduct">
                        <img src="${product.img}" alt="${product.name} photo" class="card-img-top productImage" >
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">$${product.price}</p>
                        </div>
                        <div class="add-to-cart" onclick="addToCart(${product.id})">
                            <img src="./assets/cart-icon.png" alt="add to cart">
                        </div>
                    </div>
                `;
  })
}

document.addEventListener("DOMContentLoaded", () => {
    getDb();
    setCart();
});