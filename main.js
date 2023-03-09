
//Carrito de compras

/* const btnCarrito = document.querySelector(".containerCartIcon");
const containerCartProducts = document.querySelector(".containerCartProducts")
btnCarrito.addEventListener("click", () => {
    containerCartProducts.classList.toogle("hiddenCart")
})

const cartInfo = document.querySelector(".cartProduct")
const rowProduct = document.querySelector(".rowProduct")
const productList = document.querySelector(".wrapper")





productList.addEventListener("click", e=> {
    console.log(e)
}) */

//Constructor
class Producto {
    constructor(id, nombre, material, precio, imagen){
        this.id=id;
        this.nombre=nombre;
        this.material=material;
        this.precio=precio;
        this.imagen=imagen;
    }
}

//Objetos
const anilloAcero = new Producto (0, "Anillo", "Acero", 20, "anillo.jpg");
const anilloPlata = new Producto (1, "Anillo", "Plata", 40, "anillo.jpg");
const anilloOro = new Producto (2, "Anillo", "Oro", 100, "anillo.jpg");
const pulseraAcero = new Producto (3, "Pulsera", "Acero", 40, "pulsera.jpg");
const pulseraPlata = new Producto (4, "Pulsera", "Plata", 80, "pulsera.jpg");
const pulseraOro = new Producto (5, "Pulsera", "Oro", 200, "pulsera.jpg");
const collarAcero = new Producto (6, "Collar", "Acero", 100, "collar.jpg");
const collarPlata = new Producto (7, "Collar", "Plata", 200, "collar.jpg");
const collarOro = new Producto (8, "Collar", "Oro", 500, "collar.jpg");

//Array de productos
const arrayProductos = [anilloAcero,anilloPlata,anilloOro,pulseraAcero,pulseraPlata,pulseraOro, anilloAcero, anilloPlata]

arrayProductos.push(anilloOro)

//Carrito de compras
const arrayCarrito = []

/* function listaCarrito (){
    for (item of arrayCarrito){
        let containerCarrito = document.createElement("section")
        let card = document.createElement("div")
        let datosProd = arrayProductos.find(elem => elem.id == item.producto)
        card.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="./img/${datosProd.imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${datosProd.nombre} de ${datosProd.material}</h5>
                            <p class="card-text">Te llevás ${item.cantidad}u.</p>
                            </div>
                        </div>`
        document.body.append(containerCarrito);
        containerCarrito.appendChild(card);
    }
} */


//Card
const cardProducto = (listaProductos) => {
    for (e of listaProductos){
        let card = document.createElement("div")
        card.innerHTML =`<div class="contenedorPpal">
                            <div class="card" style="width: 18rem;">
                            <img src="./img/${e.imagen}" class="card-img-top" alt="${e.nombre} de ${e.material}">
                                <div class="card-body">
                                <h5 class="card-title">${e.nombre} de ${e.material}</h5>
                                <p class="card-text">Llevalo por $${e.precio}</p>
                                <input type="button" onclick="agregarCarrito(${e.id})" class="btn btn-primary" value="Agregar">
                                </div>
                            </div>
                        </div>`
        document.body.append(card);
    }
}
cardProducto(arrayProductos)

/* //contenedor de productos
const contenedorProductos = document.getElementById("#wrapper")

function cargarProductos(){
    arrayProductos.forEach(e => {
        const div =document.createElement("div");
        div.classList.add("producto");
        div.innerHTML=`<div class="card" style="width: 18rem;">
                            <img src="./img/${e.imagen}" class="card-img-top" alt="${e.nombre}">
                            <div class="card-body">
                            <h5 class="card-title">${e.nombre} de ${e.material}</h5>
                            <p class="card-text">Llevalo por $${e.precio}</p>
                            <input type="button"  class="btn btn-primary productoAgregar" value="Agregar" id="${e.id}">
                            </div>
                        </div>`
    })
} */

//Constructor de objetos para agregar productos al carrito
class ProdCarrito{
    constructor(producto, cant){
        this.producto = producto;
        this.cantidad = cant;
    }
    sumaStock(){
        this.cantidad = this.cantidad + 1
    }
}

//Agregar al carrito
function agregarCarrito(prod){
    let existeCarrito = arrayCarrito.find(e => e.producto == prod)
    if(existeCarrito != undefined){
        let posicion = arrayCarrito.findIndex(elem => elem.producto == existeCarrito.producto);
        arrayCarrito[posicion].sumaStock();    
        console.table(arrayCarrito)
    }else{
        const prodCarrito = new ProdCarrito (prod, 1)
        arrayCarrito.push(prodCarrito)
        console.table(arrayCarrito)
    }
    localStorage.setItem("productos-en-carrito", JSON.stringify(arrayCarrito))
}


function verCarrito(){
    document.body.innerHTML = ""

    for (item of arrayCarrito) {
        let card = document.createElement("div")
        let datosProd = arrayProductos.find(elem => elem.id == item.producto)

        card.innerHTML = `<div class = "card" style="width: 18rem">
            <img src="./img/${datosProd.imagen}" class = "card-img-top" alt="${datosProd.nombre} de ${datosProd.material}">
            <div class = "card-body">
            <h5 class = "card-title">${datosProd.nombre} de ${datosProd.material}</h5>
            <p class = "card-text"> Llevas ${item.cantidad}u. </p>
            </div>
            </div>`
        document.body.append(card)
    }
}


