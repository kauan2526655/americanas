// Carrega o carrinho do localStorage, se existir
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    alert(`${name} adicionado ao carrinho!`);
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const countSpan = document.getElementById('cartCount');
    if (countSpan) {
        countSpan.textContent = count;
    }
}

function showCart() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const total = document.getElementById('total');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500">Carrinho vazio</p>';
        total.textContent = '0,00';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="flex justify-between items-center mb-2 p-2 border-b">
                <div>
                    <div class="font-bold">${item.name}</div>
                    <div class="text-sm text-gray-600">Qtd: ${item.quantity}</div>
                </div>
                <div class="font-bold">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</div>
            </div>
        `).join('');

        const totalValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        total.textContent = totalValue.toFixed(2).replace('.', ',');
    }

    modal.classList.remove('hidden');
}

function closeCart() {
    document.getElementById('cartModal').classList.add('hidden');
}

document.addEventListener("DOMContentLoaded", function () {
    updateCartCount(); // Atualiza o número do carrinho mesmo ao carregar a página
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', showCart);
    }
});
function clearCart() {
  cart = [];
  updateCartUI();
  closeCart();
  alert("Carrinho esvaziado!");
}

