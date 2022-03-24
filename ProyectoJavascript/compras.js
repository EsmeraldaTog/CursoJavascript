let carrito = [];



const productos = [
  {
    id: "01",
    nombre: "Salsa Macha Tabiche y Chapulin",
    precio: 100,
    imagen: "../imagesproyecto/product.svg",
  },
  {
    id: "02",
    nombre: "Salsa Habanero Tamarindo",
    precio: 80,
    imagen: "../imagesproyecto/product.svg",
  },
  {
    id: "03",
    nombre: "Salsa Chile de Arbol y Jamaica",
    precio: 90,
    imagen: "../imagesproyecto/product.svg",
  },
  {
    id: "04",
    nombre: "Salsa Macha de Arbol y Arandano",
    precio: 80,
    imagen: "../imagesproyecto/product.svg",
  },
];

const productosDom= document.querySelector('#productoDom')

productos.forEach((producto) => {
const nodoProductos = document.createElement("div");
 nodoProductos.innerHTML = `<img src="${producto.imagen}">
                            <h5>Nombre del Producto : ${producto.nombre}</h5>
                            <h5>Precio $${producto.precio}</h5>
                            <h5>Cantidad</h5><input id:"valor" class="comprar">`;



const cantidad = document.createElement('li')
const button = document.createElement("button");
 button.innerText = "comprar";
button.addEventListener("click",agregarProductos)
  productosDom.appendChild(nodoProductos);
 // productosDom.appendChild(cantidad);
  productosDom.appendChild(button);


 
});

function agregarProductos (){

}

