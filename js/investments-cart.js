// cart array
let cart;

function setCart(){
  cart = JSON.parse(localStorage.getItem("CART")) || [];  
  updateCart();
}

//Add to cart
function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    Swal.fire({
      title: 'Error!',
      text: 'The product is already in cart',
      icon: 'error',
      confirmButtonText: 'Cool',
    })
  } else {
    console.log("id:")
    console.log(id)

    const item = fetch('js/data.json')
        .then( (resp) => resp.json())
        .then( (data) => {
          console.log(data);
          data.find((product) => product.id == id);
        })
    //const item = data.find((product) => product.id == id);
    console.log("item:")
    console.log(item);
    
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
      <div class="cart-item d-flex justify-content-around">
        <div class="item-info" onclick="removeItemFromCart(${item.id})">
          <img src="${item.img}" alt="${item.name}">
          <h4>${item.name}</h4>
        </div>
        <div class="unit-price">
          <small>$</small>${item.price}
        </div>
      </div>
    `;
  });
}