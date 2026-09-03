

  // Products array
    const products = [
      { id: 1, name: "T-Shirt", price: 500 },
      { id: 2, name: "Jeans", price: 1200 },
      { id: 3, name: "Shoes", price: 2500 },
      { id: 4, name: "Cap", price: 300 }
    ];

    // Empty cart
    let cart = [];

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");

    // Show products
    function showProducts() {
      productList.innerHTML = "";
      products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
          <span>${product.name} - ₹${product.price}</span>
          <button onclick="addToCart(${product.id})">Add</button>
        `;
        productList.appendChild(div);
      });
    }

    // Add to cart
    function addToCart(id) {
      const product = products.find(p => p.id === id);
      const existing = cart.find(item => item.id === id);

      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ ...product, qty: 1 });
      }

      renderCart();
    }

    // Remove from cart
    function removeFromCart(id) {
      cart = cart.filter(item => item.id !== id);
      renderCart();
    }

    // Render cart
    function renderCart() {
      cartItems.innerHTML = "";
      let total = 0;

      cart.forEach(item => {
        total += item.price * item.qty;

        const li = document.createElement("li");
        li.innerHTML = `
          ${item.name} (x${item.qty}) - ₹${item.price * item.qty}
          <button onclick="removeFromCart(${item.id})">remove</button>
        `;
        cartItems.appendChild(li);
      });

      totalDisplay.textContent = total;
    }

    // Initialize
    showProducts();

   