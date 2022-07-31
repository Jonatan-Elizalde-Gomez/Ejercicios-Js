const dName = document.getElementById("forms__name");
const dEmail = document.getElementById("forms__mail");
const dSubject = document.getElementById("forms__subject");
const dButton = document.getElementById("forms__submit");
const form = document.getElementById("form");

var isName = false; 
var isEmail = false; 
var isSubject = false; 

const symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
const numbers = /[1234567890]/;

dButton.addEventListener("click", validateName);
dButton.addEventListener("click", validateMail);
dButton.addEventListener("click", validateSubjetct);
dButton.addEventListener("click", sendData);



function validateName(){
    let name = dName.value;

    if(name.length == 0){
        alert("No deje el nombre vacio");
    }
    else if(symbols.test(name)){
        alert("No se permiten numeros ni simbolos en el nombre");
    } 
    else if(numbers.test(name)){
        alert("No se permiten numeros ni simbolos en el nombre");
    } 
    else{
        isName = true;
    }
}

function validateMail(){
    let email = dEmail.value;

    if(email.length == 0){
        alert("No deje el e-mail vacio");
    }
    else if(email.includes(".") && email.includes("@")){
        isEmail = true; 
    }
    else{
        alert("El e-mail no es valido")
    }
}

function validateSubjetct(){
    let subject = dSubject.value;

    if(subject.length == 0){
        alert("No deje la materia vacio");
    }
    else if(symbols.test(subject)){
        alert("No se permiten numeros ni simbolos en la materia");
    } 
    else if(numbers.test(subject)){
        alert("No se permiten numeros ni simbolos en la materia");
    } 
    else{
        isSubject = true;
    }
}

function sendData(){
    if(isEmail && isName && isSubject){
        alert("Todos los datos estan correctos")
        form.submit();
    }
}