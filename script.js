var productList = document.querySelector(".productList")

var counter = 0

for (counter = 0; counter <= 7; counter++) {
    var item = document.createElement("li")
    item.classList.add('product')
    item.innerHTML = `
        
        <img class="productImage" src="testImage.jpg" alt="product image">
        <div class="productName">Nome do produto</div>
        <p class="productDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima possimus ea ex saepe sequi. </p>
        <div class="productOldValue">De: R$100,00</div>
        <div class="productCurrentValue">Por: R$90,00</div>
        <div class="productPaymentOption">Ou 2x de R$9,99</div>
        <button class="buyProductButton">Comprar</button>
        
    `
    productList.appendChild(item)

}