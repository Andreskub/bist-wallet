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
}

document.addEventListener("DOMContentLoaded", () => {
  renderInvestments();
  setCart();
});