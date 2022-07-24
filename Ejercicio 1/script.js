const container = document.getElementById("container");
const fragment = document.createDocumentFragment();

for (let i = 0; i < 8; i++) {
    
const newArticle = document.createElement("article");
const newHeader = document.createElement("header");
const newH2 = document.createElement("h2");
const newMain = document.createElement("main");
const newImage = document.createElement("img");
const newFooter = document.createElement("footer");
const newP1 = document.createElement("p");
const newP2 = document.createElement("p");
const newBold1 = document.createElement("b")
const newBold2 = document.createElement("b")

newHeader.appendChild(newH2);
newArticle.appendChild(newHeader);

newImage.src="key.png";
newMain.appendChild(newImage);
newArticle.appendChild(newMain);

newP1.appendChild(newBold1);
newP2.appendChild(newBold2);
newFooter.appendChild(newP1);
newFooter.appendChild(newP2);
newArticle.appendChild(newFooter);


newArticle.classList.add("key");
newArticle.setAttribute("tabindex", i+1);
newHeader.classList.add("key__header");
newH2.classList.add("key__title");
newMain.classList.add("key__main");
newImage.classList.add("key__img");
newFooter.classList.add("key__footer");
newP1.classList.add("key__paragraph")
newP2.classList.add("key__paragraph")


let keyNumber = Math.random()*99999;
keyNumber = Math.floor(keyNumber+1);

newArticle.setAttribute("id",keyNumber);


let price = Math.random()*99;
price = Math.floor(price+1);

let keyColorN = Math.random()*3;
keyColorN = Math.floor(keyColorN+1);
let keyColor = "";

switch (keyColorN) {
    case 1:
        keyColor = document.createTextNode("Azul");
        break;
        
    case 2:
        keyColor = document.createTextNode("Rojo");
        break; 

        case 3:
        keyColor = document.createTextNode("Morado");
        break; 

    default:
        break;
}

const keyTitle = document.createTextNode(`Key: ${keyNumber}`);
const keyPriceBold = document.createTextNode(`Precio: `);
const keyPrice = document.createTextNode(`$${price}`);
const keyColorBold = document.createTextNode(`Color: `);

newH2.appendChild(keyTitle);
newBold1.appendChild(keyPriceBold);
newP1.appendChild(keyPrice);
newBold2.appendChild(keyColorBold);
newP2.appendChild(keyColor);

fragment.appendChild(newArticle);


}




container.appendChild(fragment);

document.querySelectorAll('article[class="key"]').forEach(occurence => {
    occurence.addEventListener('click', ()=> {
      let key = document.querySelectorAll(".key");

      key.forEach(function(itemSelected) {
        itemSelected.classList.remove("key__selected")
      });

      document.getElementById("key").value = occurence.id;
      occurence.classList.toggle("key__selected")

    });
  });


