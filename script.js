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



function nameVerification(name) {
    // const recives all the characteres that are forbiden.
    const letters = /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/
    
    var nameValidation = true
    
    if (name === ""){
        
    }

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
    } else if (name === "") { 
        regName.classList.add('errorInput')
        labelName.classList.add('errorLabel')
        labelName.innerText = "Erro: nome é um campo obrigatório."
    } else {
        regName.classList.remove('errorInput')
        labelName.classList.remove('errorLabel')
        labelName.innerText = "Seu nome"
        labelName.classList.add('correctValidation')
    }
}

regName.onblur = function() {
    nameVerification(regName.value)
    
}
regEmail.onblur = function() {
    emailVerification(regEmail.value)
}


function emailVerification(email) {
    var user_email = "" //what's before the "@"
    var dom_email = "" //what goes after the "@" and befor the ".com"
    var DotCom_email = "" //what goes after the first "."
    var at = 0
    var first_dot = 0
    var second_dot = 0
    var email_space = 0



    for (letter in email) {
        
        if (email[letter] === "") {
            email_space += 1
        }        
        
        // if "at" was reached, don't execute below
        if (at === 0) {
            
            if (email[letter] != "@") {
                user_email += email[letter]
            } else {
                at = letter
            }
        }
        // if first dot was reached, don't execute below
        
        if (first_dot === 0 & at != 0) {
            if (email[letter] != ".") {
                dom_email += email[letter]
                
            } else {
                first_dot = letter
            }

        }
        // if second dot was reached, don't execute below
        if (first_dot != 0 & at != 0 & second_dot === 0) {
            if (email[letter] != "." || letter === first_dot) {
                DotCom_email += email[letter]
                
            } else {
                second_dot = letter
            }
        }

        if (first_dot != 0 & at != 0 & second_dot != 0) {
            if (letter < email.length) {
                DotCom_email += email[letter]
                
            } else {
                second_dot = letter
            }
        }

    }
    
    // error message construction
    if (email === "") {
        //add HTMLclass changing form style
        regEmail.classList.add('errorInput')
        labelEmail.classList.add('errorLabel')
        labelEmail.innerText = "Erro: e-mail é um campo obrigatório."

    } else if (email_space != 0 || user_email === 0 || dom_email.includes("@") === false || dom_email.length <= 1 || DotCom_email === "" || DotCom_email.length <= 1) { 
        regEmail.classList.add('errorInput')
        labelEmail.classList.add('errorLabel')
        labelEmail.innerHTML = "Erro: por gentileza, verifique o e-mail."

            
    } else {
            regEmail.classList.remove('errorInput')
            labelEmail.classList.remove('errorLabel')
            labelEmail.innerText = "E-mail"
            labelEmail.classList.add('correctValidation')
        }
    

    

    console.log(user_email+dom_email+DotCom_email)

}
//---------------------------------

