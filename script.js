// tomamos el elemento del meú de categorías
const menuCategories = document.querySelector(".menu-icon");
// tomamos el elemento de la vista individual por item
const itemView = document.querySelector(".item");
// tomamos el menu de categorías comleto
const categories = document.querySelector(".categories");
// tomamos el boton de salir del menu categorías
const quitCategories = document.querySelector(".quit-categories");
//obtenemos el titulo debajo del cual vamos a crear las categorías
const allCategories = document.querySelector(".all-categories");
//llamamos a productos, que será quien tenga 
const products = document.querySelector(".products");


//creamos una variable para poder mover la imagen
let imgPos = 0;

//creamos un array para las clases
let categoriesA = [];

//creamos una array para los items
let itemsA = [];

// Comenzamos a crear los objetos de las categorías
class Category {
    constructor (categoryItem, name, image){
        this._categoryItem = categoryItem;
        this._name = name;
        this._image = image;
    }
}
// creamos una clase para agregar a los items
class Item {
    constructor(categoryItem, name, longName, itemDescription, price, itemId,images){
        this._categoryItem = categoryItem;
        this._name = name;
        this._longName = longName;
        this._itemDescription = itemDescription;
        this._price = price;
        this._itemId = itemId;
        this._images = images;

    }
}

// Comenzamos a ingresar los datos en el array con la clase category
categoriesA.push(new Category("dragonBall","Dragon Ball","./src/categories/dragonBall.jpg"));
categoriesA.push(new Category("onePiece","One Piece","./src/categories/onePiece.jpeg"));
categoriesA.push(new Category("naruto","Naruto","./src/categories/naruto.jpeg"));
categoriesA.push(new Category("demonSlayer","Demon Slayer - Kimetsu no Yaiba","./src/categories/demonSlayer.jpeg"));
categoriesA.push(new Category("jujutsuKaisen","Jujutsu Kaisen","./src/categories/JujutsuKaisen.jpg"));
categoriesA.push(new Category("digimon","Digimon","./src/categories/digimon.jpeg"));
categoriesA.push(new Category("chainsawman","Chainsaw Man","./src/categories/Chainsawman.jpeg"));
categoriesA.push(new Category("theQuintessentialQuintuplets","The Quintessential Quintuplets - Las Quintillizas","./src/categories/theQuintessentialQuintuplets.jpeg"));
categoriesA.push(new Category("spyFamily","Spy Family","./src/categories/spyFamily.png"));
categoriesA.push(new Category("shingekyNoKyojin","Shingeky No Kyojin - Attack On Titan","./src/categories/digimon.jpeg"));
categoriesA.push(new Category("sakuraCardCaptor","Sakura Card Captor","./src/categories/cardcaptorSakura.jpg"));
categoriesA.push(new Category("tokioRevengers","Tokio Revengers","./src/categories/tokyoRevengers.jpeg"));
categoriesA.push(new Category("Evangelion","Evangelion","./src/categories/evangelion.jpg"));
categoriesA.push(new Category("osamaRanking","Ōsama Ranking - Ranking Of Kings","./src/categories/osamaRankingOfKings.jpg"));
categoriesA.push(new Category("magiaRecord","Magia Record: Puella Magi Madoka Magica Gaiden","./src/categories/magiaRecordMahouShoujoMadokaMagicaGaiden.jpg"));
categoriesA.push(new Category("pokemon","Pokemon","./src/categories/pokemon.png"));

// comanezamos a agregar elementos de los item a un arreglo

itemsA.push(new Item("dragonBall", "Trunks del Furuto","Trunks del Futuro Super Sayajin Garlick Gun Dragón Ball Súper Banpresto", "Figura original Banpresto BANDAI Dragon Ball Super","130.000",0,["./src/products/dragonBall/futureTrunks/1.jpeg","./src/products/dragonBall/futureTrunks/2.jpeg","./src/products/dragonBall/futureTrunks/3.jpeg","./src/products/dragonBall/futureTrunks/4.jpeg","./src/products/dragonBall/futureTrunks/5.jpeg","./src/products/dragonBall/futureTrunks/6.jpeg"]));
itemsA.push(new Item("dragonBall", "Trunks del Furuto","Trunks del Futuro Super Sayajin Garlick Gun Dragón Ball Súper Banpresto", "Figura original Banpresto BANDAI Dragon Ball Super","130.000",1,["./src/products/dragonBall/futureTrunks/1.jpeg","./src/products/dragonBall/futureTrunks/2.jpeg","./src/products/dragonBall/futureTrunks/3.jpeg","./src/products/dragonBall/futureTrunks/4.jpeg","./src/products/dragonBall/futureTrunks/5.jpeg","./src/products/dragonBall/futureTrunks/6.jpeg"]));
itemsA.push(new Item("dragonBall", "Trunks del Furuto","Trunks del Futuro Super Sayajin Garlick Gun Dragón Ball Súper Banpresto", "Figura original Banpresto BANDAI Dragon Ball Super","130.000",0,["./src/products/dragonBall/futureTrunks/1.jpeg","./src/products/dragonBall/futureTrunks/2.jpeg","./src/products/dragonBall/futureTrunks/3.jpeg","./src/products/dragonBall/futureTrunks/4.jpeg","./src/products/dragonBall/futureTrunks/5.jpeg","./src/products/dragonBall/futureTrunks/6.jpeg"]));


//insertamos el código HTLM para poder agregar las clases del arreglo
//creamos una cariable que será la que guarde el código completo
let categoriesRecurrent = "";
//aqui se recorrerá el arreglo para ir agregando las nuevas categorías
for (categs in categoriesA){
    
    let codigo = `<div class="cat-container">
    <figure class="cat-div">
        <img src=${categoriesA[categs]._image} alt=${categoriesA[categs]._name}>
        <figcaption>
            <p>${categoriesA[categs]._name}</p>
        </figcaption>
    </figure>
    
    </div>`;
    
    categoriesRecurrent =  categoriesRecurrent + codigo;
    allCategories.innerHTML = categoriesRecurrent;
}
//Creamos una variable que guardará el código completo de items
let itemsRecurrent = "";
//insertamos el código HTLM para poder agregar los item dentro de un arreglo

for (item in itemsA){
    let codigo = `
    <div class="product-container">
        <img src=${itemsA[item]._images[0]} alt=${itemsA[item]._name}>
            <figcaption>
                <p>${itemsA[item]._name}</p>
                <p>$${itemsA[item]._price} COP</p>
            </figcaption>
    </div>`;
    
    itemsRecurrent =  itemsRecurrent + codigo;
    products.innerHTML = itemsRecurrent;
}

//obtenemos el product container para llamar a la linea a la cual se le dará el código.
const productContainer = document.querySelectorAll(".product-container");

//creamos un evento para que al darle click en un item nos de retorne el cuadro de
//las caracteristicas completas del mismo
// Para esto se debe realizar con un for, dado que son muchos con el mimso selector

for (let i = 0; i< itemsA.length; i++){
    productContainer[i].addEventListener("click",()=>{
        itemView.classList.toggle("hide");
    })
    imgPos = 0;
    itemView.innerHTML=`
    <img class="quit" src="/src/quit.png" alt="Salir del ítem">
            <img class="back" src="/src/back.png" alt="Imágen anterior">
            <img class="foward" src="/src/foward.png" alt="Imágen siguiente">
            <img class="item-img" src=${itemsA[i]._images[imgPos]} alt=${itemsA[i]._name}>
            
            <figcaption>
                <h1>${itemsA[i]._longName}</h1>
                <p>${itemsA[i]._itemDescription}</p>
                <div class="item-buy">
                    <p>Precio: $${itemsA[i]._price} COP</p>
                    <div class="item-buy-buy">
                        <button>Comprar</button>
                        <img class="img-whatsapp" src="/src/whatsapp.png" alt="Icono de WhatsApp">
                    </div>
                </div>
            </figcaption>`


}



//llamamos el boton de salir del item
const quitItem = document.querySelector(".quit");
// llamamos al boton de back para volver a la imágen anterior
const backButton = document.querySelector(".back");
// creamos el listener para que ese botón retorme a la imagen anteior
backButton.addEventListener("click",()=>{
    let itemImg = document.querySelector(".item-img");
    let imgSrc = itemImg.getAttribute("src");
    imgPos = imgPos -1;
    
    
});
// llamamos al boton de back para volver a la imágen anterior
const fowardButton = document.querySelector(".foward");
// creamos el listener para que ese botón retorme a la imagen anteior
fowardButton.addEventListener("click",()=>{
    imgPos = imgPos +1;
});



// llamamos el menú de ingresar a categorías y le agregamos la clase hide a categorias
//o la quitamos, para que aparezca o desaparezca
menuCategories.addEventListener("click",()=>{
    categories.classList.toggle("hide");
    itemView.classList.add("hide");
});
// creamos la función para que al dar al botón de cerrar en categorías 
//estas mismas se cierren
quitCategories.addEventListener("click",()=>{
    categories.classList.add("hide");
})
//creamos un listener para salirnos al darle click al item
quitItem.addEventListener("click",()=>{
    itemView.classList.toggle("hide");
})


