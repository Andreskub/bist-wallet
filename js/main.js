class Investment {
  constructor(amount, days, investmentReturn){
    this.amount = amount;
    this.period = days;
    this.return = investmentReturn;
  }
}

/* ---------------------------------------------------------------------------- */

const $products = document.querySelector(".products");
const $cart = document.querySelector(".cart-items");
const $subtotal = document.querySelector(".subtotal");
const $totalItems = document.querySelector(".total-items-in-cart");

console.log(cart);
/*
function renderInvestments() {
  data.forEach((product) => {
    $products.innerHTML += `
            <div class="col-lg-6 col-sm-12 item">
              <div class="item-container">
                <div class="item-img"></div>
                <div class="desc">
                  <h3>${product.name}</h3>
                  <h3><small>$</small>${product.price}</h3>
                </div>
                <div class="add-to-cart" onclick="addToCart(${product.id})">
                  <img src="./assets/cart-icon.png" alt="add to cart">
                </div>
              </div>
            </div>
        `;
  });
}*/

function renderInvestments() {
  data.forEach((product) => {
    $products.innerHTML += `
            <div class="card col-md-4 displayProduct">
              <img src="${product.img}" alt="kayak Photo" class="card-img-top productImage" >
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">$${product.price}</p>
              </div>
              <div class="add-to-cart" onclick="addToCart(${product.id})">
                  <img src="./assets/cart-icon.png" alt="add to cart">
              </div>
            </div>
        `;
  });
}


document.addEventListener("DOMContentLoaded", () => {
  renderInvestments();
  setCart();
});