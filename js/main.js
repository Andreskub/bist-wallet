class Investment {
  constructor(amount, days, investmentReturn){
    this.amount = amount;
    this.period = days;
    this.return = investmentReturn;
  }
}

/* ---------------------------------------------------------------------------- */

function Investment2(id, name, img, price) {
  this.id = id;
  this.name = name;
  this.img = img;
  this.price = price;
  this.quantity = 0;
  this.subtotal = 0;
  this.subTotal = () => this.subtotal = this.price * this.quantity;
  this.decreaseQuantity = () => this.quantity--;
  this.increaseQuantity = () => this.quantity++;
}

const $products = document.querySelector(".products");
const $cart = document.querySelector(".cart-items");
const $subtotal = document.querySelector(".subtotal");
const $totalItems = document.querySelector(".total-items-in-cart");

/*
const listInvestments = [];

data.forEach(e => {
  listInvestments.push(new Investment2(e.id, e.name, e.img, e.price))
});
*/
function renderInvestments() {
  data.forEach((product) => {
    $products.innerHTML += `
            <div class="col-lg-6 col-sm-12 item">
              <div class="item-container">
                <div class="item-img">
                  <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="desc">
                  <h2>${product.name}</h2>
                  <h2><small>$</small>${product.price}</h2>
                </div>
                <div class="add-to-cart" onclick="addToCart(${product.id})">
                  <img src="./assets/cart.png" alt="add to cart">
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