// cart array
let cart;

function setCart(){
  cart = JSON.parse(localStorage.getItem("CART")) || [];  
  updateCart();
}

//Add to cart
function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = data.find((product) => product.id == id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    })
  }
  
  updateCart();
}

function updateCart() {
  renderCartItems();
  renderSubtotal();
  localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  $subtotal.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
  //$totalItems.innerHTML = totalItems;
}

// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

// render cart items
function renderCartItems() {
  $cart.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    $cart.innerHTML += `
      <div class="cart-item">
        <div class="item-info" onclick="removeItemFromCart(${item.id})">
          <img src="${item.img}" alt="${item.name}">
          <h4>${item.name}</h4>
        </div>
        <div class="unit-price">
          <small>$</small>${item.price}
        </div>
        <div class="units">
          <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
          <div class="number">${item.numberOfUnits}</div>
          <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
        </div>
      </div>
    `;
  });
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}