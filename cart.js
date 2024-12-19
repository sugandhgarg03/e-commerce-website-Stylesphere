// cart.js

// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Get the element that displays the cart count
const cartCount = document.getElementById('cart-count');

// Initialize cart counter
let cartItemsCount = 0;

// Function to update the cart count display
function updateCartCount() {
    cartCount.textContent = cartItemsCount;
}

// Add event listener for each "Add to Cart" button
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartItemsCount++; // Increase the cart item count
        updateCartCount(); // Update the displayed cart count
    });
});
cart.js
//Cart data (typically this would come from a backend or localStorage)
const cartItems = [
    { name: 'Chic Summer Dress', price: 999.00, quantity: 2 },
    { name: 'Fashion Oversized Shirt for Women', price: 499.00, quantity: 1 },
    { name: 'SilverArrow Womens Heeled Sandal', price: 1999.00, quantity: 3 }
];

// Function to display cart items in the DOM
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear any existing content

    // Loop through cart items and create HTML for each item
    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p>${item.name} (x${item.quantity}) - ₹${item.price.toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    updateTotalAmount();
}

// Function to calculate and display the total amount
function updateTotalAmount() {
    let total = 0;
    cartItems.forEach(item => {
        total += item.price * item.quantity;
    });

    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.textContent = total.toFixed(2);

    // Enable "Proceed to Pay" button if total is greater than 0
    const payButton = document.getElementById('pay-button');
    payButton.disabled = total <= 0; // Disable the button if total is 0
}

// Call the functions to display cart items and update the total
displayCartItems();