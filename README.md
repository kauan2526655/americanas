<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Americanas Simple</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<link rel="stylesheet" href="style.css">
<body class="bg-gray-100">

  <!-- Header -->
  <header class="bg-red-600 text-white p-4">
    <div class="flex items-center justify-between max-w-6xl mx-auto">
      <h1 class="text-2xl font-bold">🛒 Americanas</h1>
      <div class="flex items-center space-x-4">
        <input type="text" placeholder="Buscar produtos..." class="px-3 py-2 rounded text-black w-64">
        <button id="cartBtn" class="mt-2 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
          Carrinho (<span id="cartCount">0</span>)
</div>


  </button>
</div>

      </div>
    </div>
  </header>

  <!-- Banner -->
  <section class="bg-white py-4 text-center shadow">
    <h2 class="text-2xl font-bold">Super Ofertas!</h2>
    <p class="text-gray-600">Até 50% OFF em eletrônicos</p>
  </section>

  <!-- Produtos em Destaque -->
  <section class="max-w-6xl mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Produtos em Destaque</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

    <!-- Produto 1 -->
<div class="bg-white rounded-lg shadow p-4">
  <div class="text-6xl text-center mb-4"><img src="https://a-static.mlcdn.com.br/800x560/apple-iphone-15-128gb-preto-61-48mp-ios-5g/magazineluiza/238035600/716d868f4d404bfb6f8189c688a8c74f.jpg" 
     alt="iPhone 15" 
     class="imagem-produto"></div>
  <h3 class="font-bold mb-2">iPhone 15</h3>
  <div class="text-gray-500 line-through">R$ 5.999,00</div>
  <div class="text-2xl font-bold text-green-600 mb-3">R$ 4.799,00</div>

  <a href="produto-iphone.html" class="block mb-2">
    <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
      Ver Detalhes
    </button>
  </a>

  <a href="checkout.html">
    <button class="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
      Comprar
    </button>
  </a>
</div>


      <!-- Produto 3 -->
      <div class="bg-white rounded-lg shadow p-4">
        <div class="text-6xl text-center mb-4"><img src="https://a-static.mlcdn.com.br/1500x1500/smart-tv-55-tcl-4k-uhd-qled-55p7k-google-tv-aipq-google-assistente-3-hdmi-1-usb/magazineluiza/240144600/0323ff9dfa4cf969d2681329848a8d6d.jpg"alt="iPhone 15" 
     class="Smart TV 55"></div>
        <h3 class="font-bold mb-2">Smart TV 55"</h3>
        <div class="text-gray-500 line-through">R$ 2.999,00</div>
        <div class="text-2xl font-bold text-green-600 mb-3">R$ 2.199,00</div>
         <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-701">
      Ver Detalhes
        <button onclick="addToCart('Smart TV 55', 2199)" class="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Comprar</button>
      </div>

      <!-- Produto 4 -->
      <div class="bg-white rounded-lg shadow p-4">
        <div class="text-6xl text-center mb-4"><img src="https://http2.mlstatic.com/D_NQ_NP_965615-MLB87398570821_072025-O-fone-de-ouvido-bluetooth-branco-sem-fio-branco-academia.webp"alt="AirPods Pro" 
     class="AirPods Pro"></div>
        <h3 class="font-bold mb-2">AirPods Pro</h3>
        <div class="text-gray-500 line-through">R$ 1.299,00</div>
        <div class="text-2xl font-bold text-green-600 mb-3">R$ 999,00</div>
         <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-600">
      Ver Detalhes
      <button class="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
      Comprar
      </div>

      <!-- Produto 5 -->
      <div class="bg-white rounded-lg shadow p-4">
        <div class="text-6xl text-center mb-4">⌚</div>
        <h3 class="font-bold mb-2">Apple Watch</h3>
        <div class="text-gray-500 line-through">R$ 2.499,00</div>
        <div class="text-2xl font-bold text-green-600 mb-3">R$ 1.999,00</div>
        <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
      Ver Detalhes
        <button onclick="addToCart('Apple Watch', 1999)" class="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Comprar</button>
      </div>

      <!-- Produto 6 -->
      <div class="bg-white rounded-lg shadow p-4">
        <div class="text-6xl text-center mb-4">🎮</div>
        <h3 class="font-bold mb-2">PlayStation 5</h3>
        <div class="text-gray-500 line-through">R$ 4.999,00</div>
        <div class="text-2xl font-bold text-green-600 mb-3">R$ 4.199,00</div>
        <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
      Ver Detalhes
        <button onclick="addToCart('PlayStation 5', 4199)" class="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Comprar</button>
      </div>

      <!-- Produto 7 com link para outra página -->
      <div class="bg-white p-4 rounded shadow hover:shadow-md transition">
        <a href="detalhe-faca.html" class="block hover:opacity-90">
          <h2 class="text-xl font-bold">Jogo Facas Tramontina Plenus</h2>
          <p class="text-gray-700">Conjunto 4 peças inox + cabo preto</p>
          <p class="text-red-600 font-bold">R$ 119,90</p>
        </a>
        <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
      Ver Detalhes
        <button onclick="addToCart('Tramontina Plenus 4 peças', 119.90)" class="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Comprar</button>
      </div>

    </div>
  </section>

  <!-- Carrinho -->
  <div id="cartModal" class="fixed inset-0 bg-black bg-opacity-50 hidden">
    <div class="flex items-center justify-center min-h-screen p-4">
      <div class="bg-white rounded-lg p-6 max-w-md w-full">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold">Carrinho</h3>
          <button onclick="closeCart()" class="text-2xl">&times;</button>
        </div>
        <div id="cartItems"></div>
        <div class="border-t pt-4 mt-4">
          <div class="text-xl font-bold mb-4">Total: R$ <span id="total">0,00</span></div>
          <button class="w-full bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700">Finalizar Compra</button>
        </div>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
