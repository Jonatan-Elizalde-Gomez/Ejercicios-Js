const name = document.getElementById("forms__name");
const mail = document.getElementById("forms__mail");
const subject = document.getElementById("forms__subject");
const button = document.getElementById("forms__submit");


button.addEventListener("click",validar);
function validar(){
    alert(name);
    console.log(name);

}