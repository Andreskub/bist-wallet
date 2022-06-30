// cart array
let cart;

function setCart(){
    cart = JSON.parse(localStorage.getItem("CART")) || [];  
    updateCart();
}

// add investment to cart
function addToCart(id) {
    if (cart.some((item) => item.id === id)) {
        Swal.fire({
            title: 'Error!',
            text: 'This product is already in cart',
            icon: 'error',
            confirmButtonText: 'Cool',
        })
    } else {
        const item = productos.find((product) => product.id == id);
      
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
}

// remove item from cart
function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}

function clearCart(){
    var len = Object.keys(cart).length;
    
    if(len == 0){
        Swal.fire({
          title: 'Warning!',
          text: 'The cart is already empty',
          icon: 'warning',
          confirmButtonText: 'Ok',
        })
    } else {
        cart.forEach((item) => {
          removeItemFromCart(item.id);
        })

        Swal.fire({
            title: 'Purchased!',
            text: 'Your order was submitted correcltly',
            icon: 'success',
            timer: 4000,
            timerProgressBar: true
        })
    }
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