const elementosLs = localStorage.getItem("carritoCompras");
let carritoCompras = [];



document.addEventListener('DOMContentLoaded', e => { fetchData() });




const productosInventario = document.querySelector("#productos");
const productosCarrito = document.querySelector("#carrito");
const productosFila = document.querySelector("#cart");
const bottonBorrar = document.createElement("button");
const botonTotal= document.createElement('button')
const total = document.querySelector("#total_cart");




const fetchData = async () => {
  const res = await fetch('data.json');
  const data = await res.json()
 console.log(data)
  pintarproductosInventario(data)
}

function pintarproductosInventario(data) {
  data.forEach((element) => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("card", "col-sm-4", "col-lg-4");
    console.log(productoDiv);

    const productoCard = document.createElement("div");
    productoCard.classList.add("card-body");

    const productoImagen = document.createElement("img");
    productoImagen.classList.add("imagen", "card-img-top");
    productoImagen.setAttribute("src", element.imagen);

    const productoCardTitulo = document.createElement("h5");
    productoCardTitulo.classList.add("card-title");
    productoCardTitulo.innerText = element.nombre;

    const productoPrecio = document.createElement("p");
    productoPrecio.classList.add("card-text");
    productoPrecio.innerText = `$ ${element.precio}`;

    const botonComprar = document.createElement("button");
    botonComprar.classList.add("btn", "boton__compra");
    //  botonComprar.innerText= 'Agregar'
    botonComprar.setAttribute("marcador", element.id);
    botonComprar.addEventListener("click", () => agregarProducto(element));

    productoCard.appendChild(productoImagen);
    productoCard.appendChild(productoCardTitulo);
    productoCard.appendChild(productoPrecio);
    productoCard.appendChild(botonComprar);

    productoDiv.appendChild(productoCard);
    productosInventario.appendChild(productoDiv);
  });
}

function agregarProducto(element) {
  //realizo una destructuracion del objeto elemento
  const { id, nombre, precio, cantidad, ...restopropiedades } = element;
  carritoCompras.push({ id, nombre, precio });
  Toastify({
    text: "Se ha agreado un producto al carrito",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
   
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
  pintarCarrito();
  localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
}



if (elementosLs) {
  carritoCompras = JSON.parse(elementosLs);
  pintarCarrito();
}




function pintarCarrito() {
  const tbody = document.querySelector("#body__tabla");

  tbody.innerText = "";

  console.log(carritoCompras);
  carritoCompras.forEach((product) => {
    const tr = document.createElement("tr");

    const nodoTd1 = document.createElement("td");
    nodoTd1.innerText = product.id;

    const nodoTd2 = document.createElement("td");
    nodoTd2.innerText = product.nombre;

    const nodoTd3 = document.createElement("td");
    nodoTd3.innerText = product.precio;

    tr.appendChild(nodoTd1);
    tr.appendChild(nodoTd2);
    tr.appendChild(nodoTd3);
    tbody.appendChild(tr);
    productosFila.appendChild(tbody);


 bottonBorrar.classList.add("boton__borrar");
botonTotal.classList.add("boton__total");
botonTotal.innerText='Completar compra'
bottonBorrar.addEventListener("click", borrarCarrito);
botonTotal.addEventListener('click', totalCompra)
productosFila.appendChild(botonTotal)
productosFila.appendChild(bottonBorrar)

  });

;

  //totalCompra();
}


function totalCompra() {
  
let total1 = carritoCompras.reduce((acumulador, elemento) => acumulador + elemento.precio,0);


 total1>= 300 ? swal({title: "Tu compra incluye envio",icon:"success"}):(swal({title:'La compra actual no incluye envio gratis',text:'Agrega mas productos y el envio va por nuestra cuenta', icon:'warning'}), total1= total1+100 )
  total.textContent = `Total de su Compra ${total1}`;
  console.log(total);
  console.log(`Total de su compra: ${total1}`);
  console.log(`cantidad de Articulos comprados ${carritoCompras.length}`);
}

function borrarCarrito() {
  carritoCompras = [];

  pintarCarrito();

  localStorage.clear();
}
//  pintarproductosInventario(data);
