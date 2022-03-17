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
const labelCpf = document.querySelector("#labelCpf")
const regCpf = document.querySelector("#cpf")
const regButton = document.querySelector("#buttonSubmit")
const regGender = document.querySelectorAll('input.radio')
const boxCheck = document.querySelector('.box_check')

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
    
}
regEmail.onblur = function() {
    emailVerification(regEmail.value)
}

regCpf.onblur = function() {
    cpfVerification(regCpf.value)
}

regGender.onclick = function() {
    genderVerification()
}

function errorFound(input_element, label_element, message) {

    input_element.classList.add('errorInput')
    label_element.classList.add('errorLabel')
    label_element.innerText = message

}

function errorCorrected(input_element, label_element, message) {
    input_element.classList.remove('errorInput')
    label_element.classList.remove('errorLabel')
    label_element.innerText = message
    label_element.classList.add('correctValidation')
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
        errorFound(regName, labelName, "Erro: o nome não pode conter números ou caracteres especiais.")
        
    } else if (name === "") { 
        errorFound(regName, labelName, "Erro: nome é um campo obrigatório.")
        
    } else {
        errorCorrected(regName, labelName, "Nome validado")
        
    }
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
        
        errorFound(regEmail, labelEmail, "Erro: e-mail é um campo obrigatório.")
        

    } else if (email_space != 0 || user_email === 0 || dom_email.includes("@") === false || dom_email.length <= 1 || DotCom_email === "" || DotCom_email.length <= 1) { 
        
        errorFound(regEmail, labelEmail, "Erro: por gentileza, verifique o e-mail.")
                  
    } else {
        
        errorCorrected(regEmail, labelEmail, "E-mail validado")
        
    }
    
}

function cpfVerification(cpf) {
    
    //to a valid cpf, the first 9 digits

    //first verification
    var sum9_first_digits = 0
    var sum10_first_digits = 0
    var count = 10
    var count2 = 11
    var firstDigitTest = 0
    var secondDigitTest = 0
    // removing "-" and "."
    for (num in cpf) {
        if (cpf[num] == ".") {
            cpf = cpf.replace(cpf[num], "")
        }
        if (cpf[num] == "-") {
            cpf = cpf.replace(cpf[num], "")
        }

    }
    
    // verifying cpf's lenght 
    if (cpf.length != 11) {
        // call error function
        errorFound(regCpf, labelCpf, "ERRO: CPF precisa conter 11 dígitos.")
    } else {

        for (i = 0; i <= 8; i++) {
            
            sum9_first_digits += parseFloat(cpf[i] * count)
            count--
            
        }
        
        for (i = 0; i <= 9; i++) {
            sum10_first_digits += cpf[i] * count2
            count2--
            
        }
        
        firstDigitTest = (sum9_first_digits * 10) % 11
        secondDigitTest = (sum10_first_digits * 10) % 11
        
        if (firstDigitTest == 10) {
            firstDigitTest = 0
        }
        
        if (firstDigitTest == cpf[9] & secondDigitTest == cpf[10]) {
            errorCorrected(regCpf, labelCpf, "CPF validado")
        } else {
            errorFound(regCpf, labelCpf, "ERRO: CPF inválido, por gentileza, verificar.")
        }       
    }
}

function genderVerification() {
   console.log('Testing onclick radio')
}
//---------------------------------

