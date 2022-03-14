// FRONTEND CONSTRUCTION <----------

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

// VARIABLES DECLARATIONS <---------

var regForm = document.querySelector("#form")
var labelName = document.querySelector("#labelName")
var regName = document.querySelector("#name")
var regEmail = document.querySelector("#email")
const regButton = document.querySelector("#buttonSubmit")

// essa variavel recebe esse método que torna-se um objeto de abrir uma conexão com um determinado servidor.
const xhttp = new XMLHttpRequest()

// ORGANIZING TAB SEQUENCE <-----------

// SETTING CONNECTION WITH SERVER <----------

// the function .open() difine the request method, URL requested and the sycronazation  flag (true or flase)
xhttp.open('GET', 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')

// .send() initiates the request
xhttp.send()

// VALIDATION TESTS <----------



regButton.onclick = function() {
  
}

regName.onblur = function() {
    nameVerification(regName.value)
    console.log('Testando onblur')
}

function nameVerification(name) {
    // const recives all the characteres that are forbiden.
    const letters = /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/
    
    var nameValidation = true
    
    // goes over every letter of name, returning the index number
    for (letter in name) {
        
        // return false if it find numbers or special characters in name
        if (letters.test(name[letter]) === false) {
            nameValidation = false
        }
    }
        
    
    if (!nameValidation) {
        //add HTMLclass changing form style
        regName.classList.add('errorInput')
        labelName.classList.add('errorLabel')
        labelName.innerHTML = "Erro: o nome não pode conter números ou caracteres especiais."
    } else {
        regName.classList.remove('errorInput')
        labelName.classList.remove('errorLabel')
        labelName.innerText = "Seu nome"
        labelName.classList.add('correctValidation')
    }
}
//---------------------------------

