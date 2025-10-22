// Data Management System
class DataStore {
  constructor() {
    this.initializeData();
  }

  initializeData() {
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(this.getDefaultProducts()));
    }
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    if (!localStorage.getItem('orders')) {
      localStorage.setItem('orders', JSON.stringify([]));
    }
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([
        { id: 'admin', email: 'admin@shop.com', password: 'admin123', name: 'Admin User', isAdmin: true },
        { id: 'user1', email: 'user@shop.com', password: 'user123', name: 'Demo User', isAdmin: false }
      ]));
    }
    if (!localStorage.getItem('currentUser')) {
      localStorage.setItem('currentUser', null);
    }
  }

  getDefaultProducts() {
    return [
      {
        id: 'p1',
        name: 'Wireless Headphones',
        price: 79.99,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
        rating: 4.5,
        reviews: 234,
        stock: 50,
        featured: true
      },
      {
        id: 'p2',
        name: 'Smart Watch Pro',
        price: 299.99,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
        description: 'Advanced fitness tracking, heart rate monitor, and smartphone notifications.',
        rating: 4.7,
        reviews: 456,
        stock: 30,
        featured: true
      },
      {
        id: 'p3',
        name: 'Vintage Camera',
        price: 449.99,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop',
        description: 'Classic design meets modern technology. Perfect for photography enthusiasts.',
        rating: 4.3,
        reviews: 123,
        stock: 15,
        featured: false
      },
      {
        id: 'p4',
        name: 'Running Shoes',
        price: 89.99,
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
        description: 'Lightweight and comfortable running shoes with excellent cushioning.',
        rating: 4.6,
        reviews: 567,
        stock: 100,
        featured: true
      },
      {
        id: 'p5',
        name: 'Leather Backpack',
        price: 129.99,
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
        description: 'Genuine leather backpack with multiple compartments. Perfect for work or travel.',
        rating: 4.8,
        reviews: 345,
        stock: 25,
        featured: false
      },
      {
        id: 'p6',
        name: 'Sunglasses',
        price: 159.99,
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
        description: 'UV protection sunglasses with polarized lenses and premium frames.',
        rating: 4.4,
        reviews: 234,
        stock: 60,
        featured: false
      },
      {
        id: 'p7',
        name: 'Coffee Maker',
        price: 199.99,
        category: 'Home',
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop',
        description: 'Programmable coffee maker with thermal carafe and auto-shutoff feature.',
        rating: 4.5,
        reviews: 432,
        stock: 40,
        featured: true
      },
      {
        id: 'p8',
        name: 'Desk Lamp',
        price: 49.99,
        category: 'Home',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
        description: 'Modern LED desk lamp with adjustable brightness and color temperature.',
        rating: 4.2,
        reviews: 178,
        stock: 75,
        featured: false
      },
      {
        id: 'p9',
        name: 'Yoga Mat',
        price: 39.99,
        category: 'Sports',
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop',
        description: 'Non-slip, eco-friendly yoga mat with extra thickness for comfort.',
        rating: 4.7,
        reviews: 543,
        stock: 120,
        featured: false
      },
      {
        id: 'p10',
        name: 'Bluetooth Speaker',
        price: 69.99,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
        description: 'Portable waterproof speaker with 360-degree sound and 12-hour battery.',
        rating: 4.6,
        reviews: 678,
        stock: 85,
        featured: true
      },
      {
        id: 'p11',
        name: 'Gaming Mouse',
        price: 59.99,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
        description: 'RGB gaming mouse with programmable buttons and adjustable DPI.',
        rating: 4.5,
        reviews: 234,
        stock: 65,
        featured: false
      },
      {
        id: 'p12',
        name: 'Water Bottle',
        price: 24.99,
        category: 'Sports',
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop',
        description: 'Insulated stainless steel water bottle keeps drinks cold for 24 hours.',
        rating: 4.8,
        reviews: 890,
        stock: 200,
        featured: true
      }
    ];
  }

  getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }

  getProduct(id) {
    const products = this.getProducts();
    return products.find(p => p.id === id);
  }

  addProduct(product) {
    const products = this.getProducts();
    products.push({ ...product, id: 'p' + Date.now() });
    localStorage.setItem('products', JSON.stringify(products));
  }

  updateProduct(id, updatedProduct) {
    const products = this.getProducts();
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedProduct };
      localStorage.setItem('products', JSON.stringify(products));
    }
  }

  deleteProduct(id) {
    const products = this.getProducts();
    const filtered = products.filter(p => p.id !== id);
    localStorage.setItem('products', JSON.stringify(filtered));
  }

  getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }

  addToCart(productId, quantity = 1) {
    const cart = this.getCart();
    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ productId, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  updateCartItem(productId, quantity) {
    const cart = this.getCart();
    const item = cart.find(item => item.productId === productId);

    if (item) {
      item.quantity = quantity;
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  removeFromCart(productId) {
    const cart = this.getCart();
    const filtered = cart.filter(item => item.productId !== productId);
    localStorage.setItem('cart', JSON.stringify(filtered));
  }

  clearCart() {
    localStorage.setItem('cart', JSON.stringify([]));
  }

  getCartWithProducts() {
    const cart = this.getCart();
    const products = this.getProducts();

    return cart.map(item => {
      const product = products.find(p => p.id === item.productId);
      return product ? { ...product, quantity: item.quantity } : null;
    }).filter(item => item !== null);
  }

  getCartTotal() {
    const items = this.getCartWithProducts();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getCartCount() {
    const cart = this.getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  placeOrder(orderData) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = {
      id: 'ord' + Date.now(),
      ...orderData,
      items: this.getCartWithProducts(),
      total: this.getCartTotal(),
      date: new Date().toISOString(),
      status: 'Processing'
    };
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    this.clearCart();
    return order;
  }

  getOrders() {
    return JSON.parse(localStorage.getItem('orders')) || [];
  }

  updateOrderStatus(orderId, status) {
    const orders = this.getOrders();
    const order = orders.find(o => o.id === orderId);
    if (order) {
      order.status = status;
      localStorage.setItem('orders', JSON.stringify(orders));
    }
  }

  login(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      const { password: _, ...userWithoutPassword } = user;
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      return userWithoutPassword;
    }
    return null;
  }

  signup(userData) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.email === userData.email);

    if (existingUser) {
      return null;
    }

    const newUser = {
      id: 'u' + Date.now(),
      ...userData,
      isAdmin: false
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    const { password: _, ...userWithoutPassword } = newUser;
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
    return userWithoutPassword;
  }

  logout() {
    localStorage.setItem('currentUser', null);
  }

  getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user && user !== 'null' ? JSON.parse(user) : null;
  }

  isAdmin() {
    const user = this.getCurrentUser();
    return user && user.isAdmin;
  }
}

const dataStore = new DataStore();

// Router System
class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = '';
    window.addEventListener('popstate', () => this.handleRoute());
  }

  register(path, handler) {
    this.routes[path] = handler;
  }

  navigate(path) {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  handleRoute() {
    const path = window.location.pathname;
    this.currentRoute = path;

    const route = this.routes[path] || this.routes['/404'];
    if (route) {
      route();
    }
  }

  start() {
    this.handleRoute();
  }
}

const router = new Router();

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  renderApp();
  setupRoutes();
  router.start();
  updateCartBadge();
}

function renderApp() {
  document.body.innerHTML = `
    <div id="app">
      <header id="header"></header>
      <main id="main-content"></main>
      <div id="toast-container"></div>
    </div>
  `;
  renderHeader();
}

function renderHeader() {
  const currentUser = dataStore.getCurrentUser();
  const cartCount = dataStore.getCartCount();
  const isAdminPage = window.location.pathname.startsWith('/admin');

  const header = document.getElementById('header');
  header.innerHTML = `
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-left">
          <button class="menu-btn" onclick="toggleMobileMenu()">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="/" onclick="navigate(event, '/')" class="logo">
            <span class="logo-icon"><i class="fas fa-shopping-cart"></i></span>
            <span class="logo-text">Pikzo</span>
          </a>
        </div>

        <div class="nav-center" id="nav-menu">
          ${!isAdminPage ? `
            <div class="search-bar">
              <input type="text" placeholder="Search products..." id="search-input" onkeyup="handleSearch(event)">
              <button class="search-btn"><i class="fas fa-search"></i></button>
            </div>
          ` : ''}
        </div>

        <div class="nav-right">
          ${!isAdminPage ? `
            <a href="/cart" onclick="navigate(event, '/cart')" class="nav-icon cart-icon">
              <i class="fas fa-shopping-cart"></i>
              ${cartCount > 0 ? `<span class="badge">${cartCount}</span>` : ''}
            </a>
          ` : ''}

          ${currentUser ? `
            <div class="user-menu">
              <button class="user-btn" onclick="toggleUserMenu()">
                <span class="user-avatar">${currentUser.name.charAt(0).toUpperCase()}</span>
                <span class="user-name">${currentUser.name}</span>
              </button>
              <div class="user-dropdown" id="user-dropdown">
                ${currentUser.isAdmin ? `
                  <a href="/admin" onclick="navigate(event, '/admin')">Admin Panel</a>
                ` : ''}
                <a href="/orders" onclick="navigate(event, '/orders')">My Orders</a>
                <a href="#" onclick="handleLogout(event)">Logout</a>
              </div>
            </div>
          ` : `
            <a href="/login" onclick="navigate(event, '/login')" class="btn btn-primary">Login</a>
          `}
        </div>
      </div>
    </nav>

    ${!isAdminPage ? `
      <div class="categories-bar">
        <button class="category-btn active" onclick="filterByCategory(event, 'all')">All</button>
        <button class="category-btn" onclick="filterByCategory(event, 'Electronics')">Electronics</button>
        <button class="category-btn" onclick="filterByCategory(event, 'Fashion')">Fashion</button>
        <button class="category-btn" onclick="filterByCategory(event, 'Home')">Home</button>
        <button class="category-btn" onclick="filterByCategory(event, 'Sports')">Sports</button>
      </div>
    ` : ''}
  `;
}

function setupRoutes() {
  router.register('/', renderHomePage);
  router.register('/products', renderProductsPage);
  router.register('/product', renderProductDetailPage);
  router.register('/cart', renderCartPage);
  router.register('/checkout', renderCheckoutPage);
  router.register('/order-confirmation', renderOrderConfirmationPage);
  router.register('/login', renderLoginPage);
  router.register('/signup', renderSignupPage);
  router.register('/orders', renderOrdersPage);
  router.register('/admin', renderAdminDashboard);
  router.register('/admin/products', renderAdminProducts);
  router.register('/admin/orders', renderAdminOrders);
  router.register('/404', render404Page);
}

function navigate(event, path) {
  event.preventDefault();
  router.navigate(path);
  closeMobileMenu();
  updateCartBadge();
  renderHeader();
}
window.navigate = navigate;

function renderHomePage() {
  const products = dataStore.getProducts();
  const featuredProducts = products.filter(p => p.featured);

  const content = document.getElementById('main-content');
  content.innerHTML = `
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Welcome to Pikzo</h1>
        <p class="hero-subtitle">Discover amazing products at unbeatable prices</p>
        <button class="btn btn-large btn-primary" onclick="navigate(event, '/products')">Shop Now</button>
      </div>
    </div>

    <div class="container">
      <section class="featured-section">
        <h2 class="section-title">Featured Products</h2>
        <div class="products-grid">
          ${featuredProducts.map(product => createProductCard(product)).join('')}
        </div>
      </section>

      <section class="features-section">
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-truck"></i></div>
          <h3>Free Shipping</h3>
          <p>On orders over ₹500</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-lock"></i></div>
          <h3>Secure Payment</h3>
          <p>100% secure transactions</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-undo"></i></div>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-headset"></i></div>
          <h3>24/7 Support</h3>
          <p>Always here to help</p>
        </div>
      </section>
    </div>
  `;

  addPageTransition();
}

function renderProductsPage() {
  const products = dataStore.getProducts();

  const content = document.getElementById('main-content');
  content.innerHTML = `
    <div class="container">
      <h1 class="page-title">All Products</h1>
      <div class="products-grid" id="products-container">
        ${products.map(product => createProductCard(product)).join('')}
      </div>
    </div>
  `;

  addPageTransition();
}

function renderProductDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = dataStore.getProduct(productId);

  if (!product) {
    render404Page();
    return;
  }

  const content = document.getElementById('main-content');
  content.innerHTML = `
    <div class="container">
      <button class="btn btn-secondary" onclick="history.back()">← Back</button>

      <div class="product-detail">
        <div class="product-detail-image">
          <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/500'">
        </div>

        <div class="product-detail-info">
          <h1 class="product-detail-title">${product.name}</h1>
          <div class="product-rating">
            <span class="stars">${'⭐'.repeat(Math.floor(product.rating))}</span>
            <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
          </div>

          <div class="product-price-large">₹${product.price.toFixed(2)}</div>

          <p class="product-description">${product.description}</p>

          <div class="product-meta">
            <div class="meta-item">
              <span class="meta-label">Category:</span>
              <span class="meta-value">${product.category}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Stock:</span>
              <span class="meta-value ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}">
                ${product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
              </span>
            </div>
          </div>

          <div class="product-actions">
            <div class="quantity-selector">
              <button onclick="decrementQuantity()">−</button>
              <input type="number" id="quantity" value="1" min="1" max="${product.stock}">
              <button onclick="incrementQuantity(${product.stock})">+</button>
            </div>
            <button class="btn btn-primary btn-large" onclick="addToCartFromDetail('${product.id}')" ${product.stock === 0 ? 'disabled' : ''}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  addPageTransition();
}

function renderCartPage() {
  const cartItems = dataStore.getCartWithProducts();
  const total = dataStore.getCartTotal();

  const content = document.getElementById('main-content');

  if (cartItems.length === 0) {
    content.innerHTML = `
      <div class="container">
        <div class="empty-state">
          <div class="empty-icon"><i class="fas fa-shopping-cart"></i></div>
          <h2>Your cart is empty</h2>
          <p>Add some products to get started!</p>
          <button class="btn btn-primary" onclick="navigate(event, '/products')">Browse Products</button>
        </div>
      </div>
    `;
    addPageTransition();
    return;
  }

  content.innerHTML = `
    <div class="container">
      <h1 class="page-title">Shopping Cart</h1>

      <div class="cart-layout">
        <div class="cart-items">
          ${cartItems.map(item => `
            <div class="cart-item">
              <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/100'">
              <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">₹${item.price.toFixed(2)}</p>
              </div>
              <div class="cart-item-quantity">
                <button onclick="updateQuantity('${item.id}', ${item.quantity - 1})">−</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
              </div>
              <div class="cart-item-total">₹${(item.price * item.quantity).toFixed(2)}</div>
              <button class="cart-item-remove" onclick="removeFromCartPage('${item.id}')"><i class="fas fa-trash"></i></button>
            </div>
          `).join('')}
        </div>

        <div class="cart-summary">
          <h2>Order Summary</h2>
          <div class="summary-row">
            <span>Subtotal</span>
            <span>₹${total.toFixed(2)}</span>
          </div>
          <div class="summary-row">
            <span>Shipping</span>
            <span>${total > 500 ? 'FREE' : '₹59.99'}</span>
          </div>
          <div class="summary-row">
            <span>Tax</span>
            <span>₹${(total * 0.1).toFixed(2)}</span>
          </div>
          <div class="summary-divider"></div>
          <div class="summary-row summary-total">
            <span>Total</span>
            <span>₹${(total + (total > 500 ? 0 : 59.99) + total * 0.1).toFixed(2)}</span>
          </div>
          <button class="btn btn-primary btn-large" onclick="proceedToCheckout()">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  `;

  addPageTransition();
}

function renderCheckoutPage() {
  const currentUser = dataStore.getCurrentUser();

  if (!currentUser) {
    router.navigate('/login');
    return;
  }

  const total = dataStore.getCartTotal();
  const finalTotal = total + (total > 500 ? 0 : 59.99) + total * 0.1;

  const content = document.getElementById('main-content');
  content.innerHTML = `
    <div class="container">
      <h1 class="page-title">Checkout</h1>

      <div class="checkout-layout">
        <div class="checkout-form">
          <form onsubmit="handleCheckout(event)">
            <div class="form-section">
              <h2>Shipping Information</h2>
              <div class="form-group">
                <label>Full Name</label>
                <input type="text" name="name" value="${currentUser.name}" required>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" value="${currentUser.email}" required>
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="+91 98765 43210" required>
              </div>
              <div class="form-group">
                <label>Address</label>
                <input type="text" name="address" placeholder="123 Main St" required>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>City</label>
                  <input type="text" name="city" placeholder="Mumbai" required>
                </div>
                <div class="form-group">
                  <label>State</label>
                  <input type="text" name="state" placeholder="Maharashtra" required>
                </div>
                <div class="form-group">
                  <label>ZIP Code</label>
                  <input type="text" name="zip" placeholder="400001" required>
                </div>
              </div>
            </div>

            <div class="form-section">
              <h2>Payment Method</h2>
              <div class="payment-methods">
                <label class="payment-option">
                  <input type="radio" name="payment" value="card" checked>
                  <div class="payment-card">
                    <span class="payment-icon"><i class="fas fa-credit-card"></i></span>
                    <span>Credit/Debit Card</span>
                  </div>
                </label>
                <label class="payment-option">
                  <input type="radio" name="payment" value="upi">
                  <div class="payment-card">
                    <span class="payment-icon"><i class="fas fa-mobile-alt"></i></span>
                    <span>UPI</span>
                  </div>
                </label>
                <label class="payment-option">
                  <input type="radio" name="payment" value="cod">
                  <div class="payment-card">
                    <span class="payment-icon"><i class="fas fa-money-bill-wave"></i></span>
                    <span>Cash on Delivery</span>
                  </div>
                </label>
              </div>

              <div id="card-details" class="card-details">
                <div class="form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="xxxx xxxx xxxx xxxx" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" maxlength="19">
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" pattern="[0-9]{2}/[0-9]{2}" maxlength="5">
                  </div>
                  <div class="form-group">
                    <label>CVV</label>
                    <input type="text" placeholder="123" pattern="[0-9]{3}" maxlength="3">
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-large">Place Order - ₹${finalTotal.toFixed(2)}</button>
          </form>
        </div>

        <div class="checkout-summary">
          <h2>Order Summary</h2>
          ${dataStore.getCartWithProducts().map(item => `
            <div class="summary-item">
              <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/50'">
              <div class="summary-item-info">
                <div class="summary-item-name">${item.name}</div>
                <div class="summary-item-qty">Qty: ${item.quantity}</div>
              </div>
              <div class="summary-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          `).join('')}
          <div class="summary-divider"></div>
          <div class="summary-row">
            <span>Subtotal</span>
            <span>₹${total.toFixed(2)}</span>
          </div>
          <div class="summary-row">
            <span>Shipping</span>
            <span>${total > 500 ? 'FREE' : '₹59.99'}</span>
          </div>
          <div class="summary-row">
            <span>Tax</span>
            <span>₹${(total * 0.1).toFixed(2)}</span>
          </div>
          <div class="summary-divider"></div>
          <div class="summary-row summary-total">
            <span>Total</span>
            <span>₹${finalTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const cardDetails = document.getElementById('card-details');
      cardDetails.style.display = e.target.value === 'card' ? 'block' : 'none';
    });
  });

  addPageTransition();
}

function renderOrderConfirmationPage() {
  const params = new URLSearchParams(window.location.search);
  const orderId = params.get('id');
  const orders = dataStore.getOrders();
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    router.navigate('/');
    return;
  }

  const content = document.getElementById('main-content');
  content.innerHTML = `
    <div class="container">
      <div class="confirmation-page">
        <div class="confirmation-icon"><i class="fas fa-check-circle"></i></div>
        <h1 class="confirmation-title">Order Confirmed!</h1>
        <p class="confirmation-subtitle">Thank you for your purchase</p>

        <div class="confirmation-details">
          <div class="detail-row">
            <span class="detail-label">Order ID:</span>
            <span class="detail-value">${order.id}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Total Amount:</span>
            <span class="detail-value">₹${order.total.toFixed(2)}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Status:</span>
            <span class="detail-value status-${order.status.toLowerCase()}">${order.status}</span>
          </div>
        </div>

        <div class="confirmation-actions">
          <button class="btn btn-primary" onclick="navigate(event, '/orders')">View Orders</button>
          <button class="btn btn-secondary" onclick="navigate(event, '/')">Continue Shopping</button>
        </div>
      </div>
    </div>
  `;

  addPageTransition();
}

function renderLoginPage() {
  const content = document.getElementById('main-content');
  content.innerHTML = `
    <div class="auth-page">
      <div class="auth-container">
        <h1 class="auth-title">Welcome Back</h1>
        <p class="auth-subtitle">Login to continue shopping</p>

        <form onsubmit="handleLogin(event)" class="auth-form">
          <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="your@email.com" value="user@shop.com" required>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="••••••••" value="user123" required>
          </div>

          <button type="submit" class="btn btn-primary btn-large">Login</button>
        </form>

        <p class="auth-footer">
          Don't have an account? 
          <a href="/signup" onclick="navigate(event, '/signup')">Sign up</a>
        </p>

        <div class="demo-credentials">
          <p><strong>Demo Credentials:</strong></p>
          <p>User: user@shop.com / user123</p>
          <p>Admin: admin@shop.com / admin123</p>
        </div>
      </div>
    </div>
  `;

  addPageTransition();
}

function renderSignupPage() {
  const content = document.getElementById('main-content');
  content.innerHTML = `
    <div class="auth-page">
      <div class="auth-container">
        <h1 class="auth-title">Create Account</h1>
        <p class="auth-subtitle">Sign up to start shopping</p>

        <form onsubmit="handleSignup(event)" class="auth-form">
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" name="name" placeholder="John Doe" required>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="••••••••" minlength="6" required>
          </div>

          <button type="submit" class="btn btn-primary btn-large">Sign Up</button>
        </form>

        <p class="auth-footer">
          Already have an account? 
          <a href="/login" onclick="navigate(event, '/login')">Login</a>
        </p>
      </div>
    </div>
  `;

  addPageTransition();
}

function renderOrdersPage() {
  const currentUser = dataStore.getCurrentUser();

  if (!currentUser) {
    router.navigate('/login');
    return;
  }

  const orders = dataStore.getOrders().reverse();

  const content = document.getElementById('main-content');

  if (orders.length === 0) {
    content.innerHTML = `
      <div class="container">
        <div class="empty-state">
          <div class="empty-icon"><i class="fas fa-box-open"></i></div>
          <h2>No orders yet</h2>
          <p>Start shopping to see your orders here!</p>
          <button class="btn btn-primary" onclick="navigate(event, '/products')">Browse Products</button>
        </div>
      </div>
    `;
    addPageTransition();
    return;
  }

  content.innerHTML = `
    <div class="container">
      <h1 class="page-title">My Orders</h1>

      <div class="orders-list">
        ${orders.map(order => `
          <div class="order-card">
            <div class="order-header">
              <div>
                <h3>Order ${order.id}</h3>
                <p class="order-date">${new Date(order.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
              <div class="order-status status-${order.status.toLowerCase()}">${order.status}</div>
            </div>

            <div class="order-items">
              ${order.items.slice(0, 3).map(item => `
                <div class="order-item">
                  <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/50'">
                  <span>${item.name} x${item.quantity}</span>
                </div>
              `).join('')}
              ${order.items.length > 3 ? `<p class="order-more">+${order.items.length - 3} more items</p>` : ''}
            </div>

            <div class="order-footer">
              <div class="order-total">Total: ₹${order.total.toFixed(2)}</div>
              <button class="btn btn-secondary" onclick="viewOrderDetails('${order.id}')">View Details</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  addPageTransition();
}

function renderAdminDashboard() {
  if (!dataStore.isAdmin()) {
    router.navigate('/');
    return;
  }

  const products = dataStore.getProducts();
  const orders = dataStore.getOrders();
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const processingOrders = orders.filter(o => o.status === 'Processing').length;

  const content = document.getElementById('main-content');
  content.innerHTML = `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="admin-logo">
          <span class="logo-icon"><i class="fas fa-cog"></i></span>
          <span>Admin Panel</span>
        </div>
        <nav class="admin-nav">
          <a href="/admin" onclick="navigate(event, '/admin')" class="admin-nav-item active">
            <i class="fas fa-chart-line"></i> Dashboard
          </a>
          <a href="/admin/products" onclick="navigate(event, '/admin/products')" class="admin-nav-item">
            <i class="fas fa-box"></i> Products
          </a>
          <a href="/admin/orders" onclick="navigate(event, '/admin/orders')" class="admin-nav-item">
            <i class="fas fa-shopping-cart"></i> Orders
          </a>
          <a href="/" onclick="navigate(event, '/')" class="admin-nav-item">
            <i class="fas fa-home"></i> Back to Store
          </a>
        </nav>
      </aside>

      <main class="admin-main">
        <h1 class="admin-title">Dashboard</h1>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon"><i class="fas fa-box"></i></div>
            <div class="stat-info">
              <div class="stat-label">Total Products</div>
              <div class="stat-value">${products.length}</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon"><i class="fas fa-shopping-cart"></i></div>
            <div class="stat-info">
              <div class="stat-label">Total Orders</div>
              <div class="stat-value">${orders.length}</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon"><i class="fas fa-rupee-sign"></i></div>
            <div class="stat-info">
              <div class="stat-label">Total Revenue</div>
              <div class="stat-value">₹${totalRevenue.toFixed(2)}</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon"><i class="fas fa-hourglass-half"></i></div>
            <div class="stat-info">
              <div class="stat-label">Pending Orders</div>
              <div class="stat-value">${processingOrders}</div>
            </div>
          </div>
        </div>

        <div class="admin-section">
          <h2>Recent Orders</h2>
          <div class="admin-table-container">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${orders.slice(0, 5).reverse().map(order => `
                  <tr>
                    <td>${order.id}</td>
                    <td>${new Date(order.date).toLocaleDateString()}</td>
                    <td>${order.name}</td>
                    <td>₹${order.total.toFixed(2)}</td>
                    <td><span class="status-badge status-${order.status.toLowerCase()}">${order.status}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  `;

  addPageTransition();
}

function renderAdminProducts() {
  if (!dataStore.isAdmin()) {
    router.navigate('/');
    return;
  }

  const products = dataStore.getProducts();

  const content = document.getElementById('main-content');
  content.innerHTML = `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="admin-logo">
          <span class="logo-icon">⚙️</span>
          <span>Admin Panel</span>
        </div>
        <nav class="admin-nav">
          <a href="/admin" onclick="navigate(event, '/admin')" class="admin-nav-item">
            📊 Dashboard
          </a>
          <a href="/admin/products" onclick="navigate(event, '/admin/products')" class="admin-nav-item active">
            📦 Products
          </a>
          <a href="/admin/orders" onclick="navigate(event, '/admin/orders')" class="admin-nav-item">
            🛒 Orders
          </a>
          <a href="/" onclick="navigate(event, '/')" class="admin-nav-item">
            🏠 Back to Store
          </a>
        </nav>
      </aside>

      <main class="admin-main">
        <div class="admin-header">
          <h1 class="admin-title">Products Management</h1>
          <button class="btn btn-primary" onclick="showAddProductModal()">+ Add Product</button>
        </div>

        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Featured</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${products.map(product => `
                <tr>
                  <td><img src="${product.image}" alt="${product.name}" class="admin-product-image" onerror="this.src='https://via.placeholder.com/50'"></td>
                  <td>${product.name}</td>
                  <td>${product.category}</td>
                  <td>₹${product.price.toFixed(2)}</td>
                  <td>${product.stock}</td>
                  <td>${product.featured ? '⭐' : '-'}</td>
                  <td>
                    <button class="btn-icon" onclick="editProduct('${product.id}')" title="Edit"><i class="fas fa-edit"></i></button>
                    <button class="btn-icon" onclick="deleteProduct('${product.id}')" title="Delete"><i class="fas fa-trash"></i></button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </main>
    </div>

    <div id="product-modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="modal-title">Add Product</h2>
          <button class="modal-close" onclick="closeProductModal()">×</button>
        </div>
        <form onsubmit="handleProductSubmit(event)" id="product-form">
          <input type="hidden" id="product-id" name="id">
          <div class="form-group">
            <label>Product Name</label>
            <input type="text" name="name" required>
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="number" name="price" step="0.01" min="0" required>
          </div>
          <div class="form-group">
            <label>Category</label>
            <select name="category" required>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Home">Home</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
          <div class="form-group">
            <label>Image URL</label>
            <input type="url" name="image" required>
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea name="description" rows="3" required></textarea>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Stock</label>
              <input type="number" name="stock" min="0" required>
            </div>
            <div class="form-group">
              <label>Rating</label>
              <input type="number" name="rating" step="0.1" min="0" max="5" required>
            </div>
            <div class="form-group">
              <label>Reviews</label>
              <input type="number" name="reviews" min="0" required>
            </div>
          </div>
          <div class="form-group">
            <label class="checkbox-label">
              <input type="checkbox" name="featured">
              Featured Product
            </label>
          </div>
          <button type="submit" class="btn btn-primary btn-large">Save Product</button>
        </form>
      </div>
    </div>
  `;

  addPageTransition();
}

function renderAdminOrders() {
  if (!dataStore.isAdmin()) {
    router.navigate('/');
    return;
  }

  const orders = dataStore.getOrders().reverse();

  const content = document.getElementById('main-content');
  content.innerHTML = `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="admin-logo">
          <span class="logo-icon">⚙️</span>
          <span>Admin Panel</span>
        </div>
        <nav class="admin-nav">
          <a href="/admin" onclick="navigate(event, '/admin')" class="admin-nav-item">
            📊 Dashboard
          </a>
          <a href="/admin/products" onclick="navigate(event, '/admin/products')" class="admin-nav-item">
            📦 Products
          </a>
          <a href="/admin/orders" onclick="navigate(event, '/admin/orders')" class="admin-nav-item active">
            🛒 Orders
          </a>
          <a href="/" onclick="navigate(event, '/')" class="admin-nav-item">
            🏠 Back to Store
          </a>
        </nav>
      </aside>

      <main class="admin-main">
        <h1 class="admin-title">Orders Management</h1>

        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${orders.map(order => `
                <tr>
                  <td>${order.id}</td>
                  <td>${new Date(order.date).toLocaleDateString()}</td>
                  <td>
                    <div>${order.name}</div>
                    <div class="text-small">${order.email}</div>
                  </td>
                  <td>${order.items.length} items</td>
                  <td>₹${order.total.toFixed(2)}</td>
                  <td>
                    <select onchange="updateOrderStatus('${order.id}', this.value)" class="status-select status-${order.status.toLowerCase()}">
                      <option value="Processing" ${order.status === 'Processing' ? 'selected' : ''}>Processing</option>
                      <option value="Shipped" ${order.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                      <option value="Delivered" ${order.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                      <option value="Cancelled" ${order.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                    </select>
                  </td>
                  <td>
                    <button class="btn-icon" onclick="viewAdminOrderDetails('${order.id}')" title="View"><i class="fas fa-eye"></i></button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </main>
    </div>

    <div id="order-detail-modal" class="modal">
      <div class="modal-content modal-large">
        <div class="modal-header">
          <h2>Order Details</h2>
          <button class="modal-close" onclick="closeOrderDetailModal()">×</button>
        </div>
        <div id="order-detail-content"></div>
      </div>
    </div>
  `;

  addPageTransition();
}

function render404Page() {
  const content = document.getElementById('main-content');
  content.innerHTML = `
    <div class="container">
      <div class="empty-state">
        <div class="empty-icon">404</div>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist.</p>
        <button class="btn btn-primary" onclick="navigate(event, '/')">Go Home</button>
      </div>
    </div>
  `;

  addPageTransition();
}

// Helper Functions
function createProductCard(product) {
  return `
    <div class="product-card" onclick="viewProduct('${product.id}')">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300'">
        ${product.stock === 0 ? '<div class="stock-badge out-of-stock">Out of Stock</div>' : ''}
        ${product.featured ? '<div class="stock-badge featured">Featured</div>' : ''}
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          <span class="stars">${'⭐'.repeat(Math.floor(product.rating))}</span>
          <span class="rating-text">(${product.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="product-price">₹${product.price.toFixed(2)}</div>
          <button class="btn btn-sm btn-primary" onclick="addToCart(event, '${product.id}')" ${product.stock === 0 ? 'disabled' : ''}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

function viewProduct(id) {
  router.navigate(`/product?id=${id}`);
}

function addToCart(event, productId) {
  event.stopPropagation();
  dataStore.addToCart(productId);
  updateCartBadge();
  showToast('Product added to cart!');
}

function addToCartFromDetail(productId) {
  const quantity = parseInt(document.getElementById('quantity').value);
  dataStore.addToCart(productId, quantity);
  updateCartBadge();
  showToast('Product added to cart!');
}

function incrementQuantity(max) {
  const input = document.getElementById('quantity');
  if (parseInt(input.value) < max) {
    input.value = parseInt(input.value) + 1;
  }
}

function decrementQuantity() {
  const input = document.getElementById('quantity');
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

function updateQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCartPage(productId);
  } else {
    dataStore.updateCartItem(productId, newQuantity);
    renderCartPage();
    updateCartBadge();
  }
}

function removeFromCartPage(productId) {
  dataStore.removeFromCart(productId);
  renderCartPage();
  updateCartBadge();
  showToast('Product removed from cart');
}

function proceedToCheckout() {
  const currentUser = dataStore.getCurrentUser();
  if (!currentUser) {
    router.navigate('/login');
    showToast('Please login to continue');
  } else {
    router.navigate('/checkout');
  }
}

function handleCheckout(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const orderData = Object.fromEntries(formData);

  showLoadingOverlay('Processing your order...');

  setTimeout(() => {
    const order = dataStore.placeOrder(orderData);
    hideLoadingOverlay();
    router.navigate(`/order-confirmation?id=${order.id}`);
    updateCartBadge();
    showToast('Order placed successfully!');
  }, 2000);
}

function handleLogin(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const email = formData.get('email');
  const password = formData.get('password');

  const user = dataStore.login(email, password);

  if (user) {
    showToast(`Welcome back, ${user.name}!`);
    renderHeader();
    router.navigate('/');
  } else {
    showToast('Invalid credentials. Please try again.', 'error');
  }
}

function handleSignup(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const userData = Object.fromEntries(formData);

  const user = dataStore.signup(userData);

  if (user) {
    showToast(`Welcome, ${user.name}!`);
    renderHeader();
    router.navigate('/');
  } else {
    showToast('Email already exists. Please login.', 'error');
  }
}

function handleLogout(event) {
  event.preventDefault();
  dataStore.logout();
  showToast('Logged out successfully');
  renderHeader();
  router.navigate('/');
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-icon .badge');
  const count = dataStore.getCartCount();
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span><i class="fas fa-${type === 'success' ? 'check' : 'times'}"></i></span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 100);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function showLoadingOverlay(message = 'Loading...') {
  const overlay = document.createElement('div');
  overlay.id = 'loading-overlay';
  overlay.className = 'loading-overlay';
  overlay.innerHTML = `
    <div class="loading-spinner"></div>
    <p>${message}</p>
  `;
  document.body.appendChild(overlay);
}

function hideLoadingOverlay() {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) {
    overlay.remove();
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('show');
}
window.toggleMobileMenu = toggleMobileMenu;

function closeMobileMenu() {
  const menu = document.getElementById('nav-menu');
  if (menu) {
    menu.classList.remove('show');
  }
}

function toggleUserMenu() {
  const dropdown = document.getElementById('user-dropdown');
  dropdown.classList.toggle('show');
}

document.addEventListener('click', (e) => {
  const userMenu = document.querySelector('.user-menu');
  if (userMenu && !userMenu.contains(e.target)) {
    const dropdown = document.getElementById('user-dropdown');
    if (dropdown) {
      dropdown.classList.remove('show');
    }
  }
});

function handleSearch(event) {
  if (event.key === 'Enter') {
    const query = event.target.value.toLowerCase();
    const products = dataStore.getProducts();
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );

    displayFilteredProducts(filtered);
  }
}
window.handleSearch = handleSearch;

function filterByCategory(event, category) {
  document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const products = dataStore.getProducts();
  const filtered = category === 'all' ? products : products.filter(p => p.category === category);

  displayFilteredProducts(filtered);
}
window.filterByCategory = filterByCategory;

function displayFilteredProducts(products) {
  const container = document.getElementById('products-container');
  if (container) {
    container.innerHTML = products.map(product => createProductCard(product)).join('');
  }
}

function viewOrderDetails(orderId) {
  const orders = dataStore.getOrders();
  const order = orders.find(o => o.id === orderId);

  if (!order) return;

  alert(`Order Details:\n\nOrder ID: ${order.id}\nDate: ${new Date(order.date).toLocaleDateString()}\nTotal: ₹${order.total.toFixed(2)}\nStatus: ${order.status}\n\nItems:\n${order.items.map(item => `${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}`).join('\n')}`);
}

function showAddProductModal() {
  document.getElementById('modal-title').textContent = 'Add Product';
  document.getElementById('product-form').reset();
  document.getElementById('product-id').value = '';
  document.getElementById('product-modal').style.display = 'flex';
}

function editProduct(id) {
  const product = dataStore.getProduct(id);
  if (!product) return;

  document.getElementById('modal-title').textContent = 'Edit Product';
  const form = document.getElementById('product-form');
  form.name.value = product.name;
  form.price.value = product.price;
  form.category.value = product.category;
  form.image.value = product.image;
  form.description.value = product.description;
  form.stock.value = product.stock;
  form.rating.value = product.rating;
  form.reviews.value = product.reviews;
  form.featured.checked = product.featured;
  document.getElementById('product-id').value = id;

  document.getElementById('product-modal').style.display = 'flex';
}

function deleteProduct(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    dataStore.deleteProduct(id);
    renderAdminProducts();
    showToast('Product deleted successfully');
  }
}

function closeProductModal() {
  document.getElementById('product-modal').style.display = 'none';
}

function handleProductSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const productData = {
    name: formData.get('name'),
    price: parseFloat(formData.get('price')),
    category: formData.get('category'),
    image: formData.get('image'),
    description: formData.get('description'),
    stock: parseInt(formData.get('stock')),
    rating: parseFloat(formData.get('rating')),
    reviews: parseInt(formData.get('reviews')),
    featured: formData.get('featured') === 'on'
  };

  const productId = document.getElementById('product-id').value;

  if (productId) {
    dataStore.updateProduct(productId, productData);
    showToast('Product updated successfully');
  } else {
    dataStore.addProduct(productData);
    showToast('Product added successfully');
  }

  closeProductModal();
  renderAdminProducts();
}

function updateOrderStatus(orderId, status) {
  dataStore.updateOrderStatus(orderId, status);
  showToast('Order status updated');
}

function viewAdminOrderDetails(orderId) {
  const orders = dataStore.getOrders();
  const order = orders.find(o => o.id === orderId);

  if (!order) return;

  const content = document.getElementById('order-detail-content');
  content.innerHTML = `
    <div class="order-detail-section">
      <h3>Order Information</h3>
      <div class="detail-grid">
        <div><strong>Order ID:</strong> ${order.id}</div>
        <div><strong>Date:</strong> ${new Date(order.date).toLocaleDateString()}</div>
        <div><strong>Status:</strong> <span class="status-badge status-${order.status.toLowerCase()}">${order.status}</span></div>
        <div><strong>Payment:</strong> ${order.payment || 'N/A'}</div>
      </div>
    </div>

    <div class="order-detail-section">
      <h3>Customer Information</h3>
      <div class="detail-grid">
        <div><strong>Name:</strong> ${order.name}</div>
        <div><strong>Email:</strong> ${order.email}</div>
        <div><strong>Phone:</strong> ${order.phone}</div>
        <div><strong>Address:</strong> ${order.address}, ${order.city}, ${order.state} ${order.zip}</div>
      </div>
    </div>

    <div class="order-detail-section">
      <h3>Order Items</h3>
      <table class="detail-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          ${order.items.map(item => `
            <tr>
              <td>${item.name}</td>
              <td>₹${item.price.toFixed(2)}</td>
              <td>${item.quantity}</td>
              <td>₹${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="order-total-row">
        <strong>Total Amount:</strong>
        <strong>₹${order.total.toFixed(2)}</strong>
      </div>
    </div>
  `;

  document.getElementById('order-detail-modal').style.display = 'flex';
}

function closeOrderDetailModal() {
  document.getElementById('order-detail-modal').style.display = 'none';
}

window.onclick = function(event) {
  const productModal = document.getElementById('product-modal');
  const orderModal = document.getElementById('order-detail-modal');

  if (event.target === productModal) {
    closeProductModal();
  }
  if (event.target === orderModal) {
    closeOrderDetailModal();
  }
};

function addPageTransition() {
  const content = document.getElementById('main-content');
  content.style.opacity = '0';
  content.style.transform = 'translateY(20px)';

  setTimeout(() => {
    content.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
  }, 50);
}

let touchStartY = 0;
let pullToRefreshEnabled = false;

document.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchmove', (e) => {
  const touchY = e.touches[0].clientY;
  const touchDiff = touchY - touchStartY;

  if (touchDiff > 0 && window.scrollY === 0) {
    pullToRefreshEnabled = true;
  }
}, { passive: true });

document.addEventListener('touchend', () => {
  if (pullToRefreshEnabled) {
    location.reload();
  }
  pullToRefreshEnabled = false;
}, { passive: true });

// Make functions globally accessible for inline HTML event handlers
window.viewProduct = viewProduct;
window.addToCart = addToCart;
window.addToCartFromDetail = addToCartFromDetail;
window.incrementQuantity = incrementQuantity;
window.decrementQuantity = decrementQuantity;
window.updateQuantity = updateQuantity;
window.removeFromCartPage = removeFromCartPage;
window.proceedToCheckout = proceedToCheckout;
window.handleCheckout = handleCheckout;
window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.handleLogout = handleLogout;
window.toggleUserMenu = toggleUserMenu;
window.viewOrderDetails = viewOrderDetails;
window.showAddProductModal = showAddProductModal;
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.closeProductModal = closeProductModal;
window.handleProductSubmit = handleProductSubmit;
window.updateOrderStatus = updateOrderStatus;
window.viewAdminOrderDetails = viewAdminOrderDetails;
window.closeOrderDetailModal = closeOrderDetailModal;
window.updateCartBadge = updateCartBadge;
window.showToast = showToast;