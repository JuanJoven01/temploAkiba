// a partir de aqui vamos a hacer el código para que se cree las categorías
// creamos el div contenedor
const catContainer = document.createElement('div');
catContainer.setAttribute('class','title-categories');
//creamos la imágen para salir
const qquitCategories = document.createElement('img');
quitCategories.setAttribute('class','quit-categories');
quitCategories.setAttribute('src','/src/quit.png');
quitCategories.setAttribute('alt','Salir de categorías');
//creamos el figure
const catDiv = document.createElement('figure');
catDiv.setAttribute('class','cat-div');
//creamos la imágen de la categoría
const imgCat = document.createElement('img');
imgCat.setAttribute('src','/src/categories/dragonBall.jpg');
imgCat.setAttribute('alt','Dragon Ball');
//creamos el figcaption
const catFigcaption = document.createElement('ficaption');
//creamos el p del nombre de la categoría
const catP = document.createElement('p');
catP.innerText = 'Dragon Ball';

//ahora vamos a organizar los elementos uno debajo del otro

titleCategories.append(catContainer);
catContainer.appendChild(quitCategories,catDiv);
catDiv.appendChild(imgCat,catFigcaption);
catFigcaption.appendChild(catP);

//no borrar
itemsRecurrent = "";
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
        productContainer = document.querySelectorAll(".product-container");