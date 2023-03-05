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
// llamamos el botón de back home para poder volver al inicio de la página
const backHome = document.querySelector(".back-home");
//traemos el campo en el cual se ingresará el item a buscar
const searchInput = document.querySelector(".search-string");
//traemos el boton con el cual buscaremos
const searchButton = document.querySelector(".search-button");

//creamos una variable que se creará en los productos de la lista
//para saber a cual le hemos dado click
let itemClick = 0;

//creamos una variable para poder mover la imagen
let imgPos = 0;

//creamos un array para las clases
let categoriesA = [];

//creamos una array para los items
let itemsA = [];

//creamos un array en el cual se guardarán los elementos de cada categoría
let searchedCategory = [];

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
    constructor(categoryItem, name, longName, itemDescription, price,images){
        this._categoryItem = categoryItem;
        this._name = name;
        this._longName = longName;
        this._itemDescription = itemDescription;
        this._price = price;
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
categoriesA.push(new Category("chainsawMan","Chainsaw Man","./src/categories/Chainsawman.jpeg"));
categoriesA.push(new Category("theQuintessentialQuintuplets","The Quintessential Quintuplets - Las Quintillizas","./src/categories/theQuintessentialQuintuplets.jpeg"));
categoriesA.push(new Category("spyFamily","Spy Family","./src/categories/spyFamily.png"));
categoriesA.push(new Category("shingekyNoKyojin","Shingeky No Kyojin - Attack On Titan","./src/categories/digimon.jpeg"));
categoriesA.push(new Category("sakuraCardCaptor","Sakura Card Captor","./src/categories/cardcaptorSakura.jpg"));
categoriesA.push(new Category("tokioRevengers","Tokio Revengers","./src/categories/tokyoRevengers.jpeg"));
categoriesA.push(new Category("Evangelion","Evangelion","./src/categories/evangelion.jpg"));
categoriesA.push(new Category("osamaRanking","Ōsama Ranking - Ranking Of Kings","./src/categories/osamaRankingOfKings.jpg"));
categoriesA.push(new Category("puellaMagi","Magia Record: Puella Magi Madoka Magica Gaiden","./src/categories/magiaRecordMahouShoujoMadokaMagicaGaiden.jpg"));
categoriesA.push(new Category("pokemon","Pokemon","./src/categories/pokemon.png"));

// comanezamos a agregar elementos de los item a un arreglo

itemsA.push(new Item("dragonBall", "Trunks del Furuto","Trunks del Futuro Super Sayajin Garlick Gun Dragón Ball Súper Banpresto", "Figura original Banpresto BANDAI Dragon Ball Super","130.000",["./src/products/dragonBall/futureTrunks/1.jpeg","./src/products/dragonBall/futureTrunks/2.jpeg","./src/products/dragonBall/futureTrunks/3.jpeg","./src/products/dragonBall/futureTrunks/4.jpeg","./src/products/dragonBall/futureTrunks/5.jpeg","./src/products/dragonBall/futureTrunks/6.jpeg"]));
itemsA.push(new Item("dragonBall", "Trunks del Furuto","Trunks del Futuro Super Sayajin Garlick Gun Dragón Ball Súper Banpresto", "Figura original Banpresto BANDAI Dragon Ball Super","130.000",["./src/products/dragonBall/futureTrunks/1.jpeg","./src/products/dragonBall/futureTrunks/2.jpeg","./src/products/dragonBall/futureTrunks/3.jpeg","./src/products/dragonBall/futureTrunks/4.jpeg","./src/products/dragonBall/futureTrunks/5.jpeg","./src/products/dragonBall/futureTrunks/6.jpeg"]));
itemsA.push(new Item("dragonBall", "Trunks del Furuto","Trunks del Futuro Super Sayajin Garlick Gun Dragón Ball Súper Banpresto", "Figura original Banpresto BANDAI Dragon Ball Super","130.000",["./src/products/dragonBall/futureTrunks/1.jpeg","./src/products/dragonBall/futureTrunks/2.jpeg","./src/products/dragonBall/futureTrunks/3.jpeg","./src/products/dragonBall/futureTrunks/4.jpeg","./src/products/dragonBall/futureTrunks/5.jpeg","./src/products/dragonBall/futureTrunks/6.jpeg"]));


//insertamos el código HTLM para poder agregar las clases del arreglo
//creamos una cariable que será la que guarde el código completo
let categoriesRecurrent = "";
//aqui se recorrerá el arreglo para ir agregando las nuevas categorías
for (categs in categoriesA){
    
    let codigo = `<div class="cat-container" class1=${categoriesA[categs]._categoryItem}>
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
    <div class="product-container itemNo${item}">
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
let productContainer = document.querySelectorAll(".product-container");

//creamos un evento para que al darle click en un item nos de retorne el cuadro de
//las caracteristicas completas del mismo
// Para esto se debe realizar con un for, dado que son muchos con el mimso selector
listenerItemList();
function listenerItemList(){
    for (let i = 0; i< itemsA.length; i++){
        productContainer[i].addEventListener("click",()=>{
            itemView.classList.toggle("hide");
            itemClick = i;
            imgPos = 0;
            itemView.innerHTML=`
            <img class="quit" src="/src/quit.png" alt="Salir del ítem">
                    <img class="back" src="/src/back.png" alt="Imágen anterior">
                    <img class="foward" src="/src/foward.png" alt="Imágen siguiente">
                    <img class="item-img" src=${itemsA[itemClick]._images[imgPos]} alt=${itemsA[itemClick]._name}>
                    
                    <figcaption>
                        <h1>${itemsA[itemClick]._longName}</h1>
                        <p>${itemsA[itemClick]._itemDescription}</p>
                        <div class="item-buy">
                            <p>Precio: $${itemsA[itemClick]._price} COP</p>
                            <div class="item-buy-buy">
                                <button>Comprar</button>
                                <img class="img-whatsapp" src="/src/whatsapp.png" alt="Icono de WhatsApp">
                            </div>
                        </div>
                    </figcaption>`
    
                    // llamamos al boton de back para volver a la imágen anterior
                    const backButton = document.querySelector(".back");
                    // creamos el listener para que ese botón retorme a la imagen anteior
                    backButton.addEventListener("click",()=>{
                        if (imgPos < 1){
                            return null
                        }else{
                            imgPos = imgPos -1;
                        }
                        
                        let itemImg = document.querySelector(".item-img");
                        itemImg.setAttribute("src",`${itemsA[itemClick]._images[imgPos]}`);
                        
                    });
    
                    // llamamos al boton de fpward para acanzar a la siguiente imagen
                    const fowardButton = document.querySelector(".foward");
                    // creamos el listener para que ese botón retorme a la imagen anteior
                    fowardButton.addEventListener("click",()=>{
                        if (imgPos >= (itemsA[itemClick]._images.length - 1)){
                            return null
                        } else{
                            imgPos = imgPos +1;
                        }
                        let itemImg = document.querySelector(".item-img");
                        itemImg.setAttribute("src",`${itemsA[itemClick]._images[imgPos]}`);
                    }
                    );
    
                    //llamamos el boton de salir del item
                    const quitItem = document.querySelector(".quit");
                    //creamos un listener para salirnos al darle click al item
                    quitItem.addEventListener("click",()=>{
                        itemView.classList.toggle("hide");
                    })
    
    
            })
    }
}


// llamamos a los cat container para poder seleccionar a las categorías
const catContainer = document.querySelectorAll(".cat-container");
//aqui vamos a agregar el código para el listener de las categorías

for (let i = 0; i < categoriesA.length; i++){
    catContainer[i].addEventListener("click", ()=>{
        categories.classList.add("hide");
        let class1 = catContainer[i].getAttribute("class1");
        console.log(class1);
        console.log(itemsA);
        searchedCategory = [];
        for (let j = 0; j < itemsA.length;j++){
            if (itemsA[j]._categoryItem == class1){
                searchedCategory.push(itemsA[j]);
                console.log("coincidencia encontrada");
            }else{
                console.log("no se encontró coincidencia");
            }
        }
        console.log(searchedCategory);

        itemsRecurrent = "";
        if (searchedCategory[0] != null){
            for (item in searchedCategory){
                let codigo = `
                <div class="product-container itemNo${item}">
                    <img src=${searchedCategory[item]._images[0]} alt=${searchedCategory[item]._name}>
                        <figcaption>
                            <p>${searchedCategory[item]._name}</p>
                            <p>$${searchedCategory[item]._price} COP</p>
                        </figcaption>
                </div>`;
                
                itemsRecurrent =  itemsRecurrent + codigo;
                products.innerHTML = itemsRecurrent;

            }
            //usamos un selector para obtener todos los elementos del array
            console.log("si selecciona los container");
            productContainer = document.querySelectorAll(".product-container");
            console.log(productContainer);
            for ( let j = 0; j < productContainer.length; j++ ){
                console.log("el for está bien");
                productContainer[j].addEventListener("click",()=>{
                    itemView.classList.remove("hide");
                    itemClick = j;
                    imgPos = 0;
                    console.log(`${searchedCategory[itemClick]._images[imgPos]}`);
                    itemView.innerHTML=`
                    <img class="quit" src="/src/quit.png" alt="Salir del ítem">
                        <img class="back" src="/src/back.png" alt="Imágen anterior">
                        <img class="foward" src="/src/foward.png" alt="Imágen siguiente">
                        <img class="item-img" src=${searchedCategory[itemClick]._images[imgPos]} alt=${searchedCategory[itemClick]._name}>
                        <figcaption>
                            <h1>${searchedCategory[itemClick]._longName}</h1>
                            <p>${searchedCategory[itemClick]._itemDescription}</p>
                            <div class="item-buy">
                                <p>Precio: $${searchedCategory[itemClick]._price} COP</p>
                                <div class="item-buy-buy">
                                    <button>Comprar</button>
                                    <img class="img-whatsapp" src="/src/whatsapp.png" alt="Icono de WhatsApp">
                                </div>
                            </div>
                        </figcaption>`
        
                        // llamamos al boton de back para volver a la imágen anterior
                        const backButton = document.querySelector(".back");
                        // creamos el listener para que ese botón retorme a la imagen anteior
                        backButton.addEventListener("click",()=>{
                            if (imgPos < 1){
                                return null
                            }else{
                                imgPos = imgPos -1;
                            }
                            
                            let itemImg = document.querySelector(".item-img");
                            itemImg.setAttribute("src",`${searchedCategory[itemClick]._images[imgPos]}`);
                            
                        });
        
                        // llamamos al boton de fpward para acanzar a la siguiente imagen
                        const fowardButton = document.querySelector(".foward");
                        // creamos el listener para que ese botón retorme a la imagen anteior
                        fowardButton.addEventListener("click",()=>{
                            if (imgPos >= (searchedCategory[itemClick]._images.length - 1)){
                                return null
                            } else{
                                imgPos = imgPos +1;
                            }
                            let itemImg = document.querySelector(".item-img");
                            itemImg.setAttribute("src",`${searchedCategory[itemClick]._images[imgPos]}`);
                        }
                        );
        
                        //llamamos el boton de salir del item
                        const quitItem = document.querySelector(".quit");
                        //creamos un listener para salirnos al darle click al item
                        quitItem.addEventListener("click",()=>{
                            itemView.classList.toggle("hide");
                        })
                    })



            }



        }else{
            products.innerHTML = `<h2> Lo sentimos, no tenemos stock para esta categoría</h2>`;
            console.log("tambien llega");
        }
        
    });
}


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

//ponemso un listener a back home para que nos vuelva a imprimir los item
backHome.addEventListener("click", ()=>{
    itemsRecurrent = "";
    for (item in itemsA){
        let codigo = `
        <div class="product-container itemNo${item}">
            <img src=${itemsA[item]._images[0]} alt=${itemsA[item]._name}>
                <figcaption>
                    <p>${itemsA[item]._name}</p>
                    <p>$${itemsA[item]._price} COP</p>
                </figcaption>
        </div>`;
        
        itemsRecurrent =  itemsRecurrent + codigo;
        products.innerHTML = itemsRecurrent;
        
    }
    productContainer = document.querySelectorAll(".product-container");
    listenerItemList();
});

//aqui vamos a crear la lógica para buscar

searchButton.addEventListener("click",()=>{
    searchByString();
})


searchInput.addEventListener("keypress",(event)=>{
    
    if(event.key == "Enter"){
        event.preventDefault();
    console.log(searchInput.value);
    }
})


function searchByString (){
    console.log(searchInput.value);
}