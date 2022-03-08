 
//SIMULADOR DE CARRITO DE COMPRAS PARA EMPRENDIMIENTO DE SALSAS MEXICANAS ARTESANALES
// SE CUENTA CON UN STOCK DETERMINADO DE PRODUCTOS 
// EN ESTE SIMULADOR PARTIMOS DE QUE EL CLIENTE YA CUENTA CON 4 PRODUCTOS ELEGIDOS EN SU CARRITO DE COMPRA , SE PUEDE AGREGAR, BUSCAR, ELIMINAR DEL CARRITO
// GENERA LA SUMA DE LOS PRODUCTOS AL FINALIZAR LOS 3 PROBABLES CASOS (1.AGREGAR PRODUCTO,2.BUSCAR PRODUCTO EN EL CARRITO, 3. ELIMINAR PRODUCTO)

alert("SIMULADOR DE CARRITO DE COMPRAS");

const productos = [
  { nombre: "tamarindo", precio: 70, cantidad: 4 },
  { nombre: "chapulin", precio: 100, cantidad: 5 },
  { nombre: "tradicional", precio: 90, cantidad: 2 },
  { nombre: "dulce habanero", precio: 80, cantidad: 3 },
];

class Producto {
  constructor(nombre, precio, cantidad) {
    (this.nombre = nombre),
      (this.precio = precio),
      (this.cantidad = cantidad);
  }
}

function subtotal(precio,cantidad) {

  precio * cantidad
}


 console.log(productos);
let seleccion = prompt(
    "Seleccione opcion: \n 1. Mostrar los productos Cargados en el Carrito \n 2.Agregar Productos \n 3.Buscar Producto \n 4. Eliminar un producto  \n 5.Total de la Compra "
  );
switch (seleccion) {
  case "1":
    {
      console.log(productos);
      //muestra en consola los productos agregados hasta el momento
    }
    
  // AGREGA NUEVOS PRODUCTOS AL CARRITO
  case "2":
    {
      alert('Agregando Productos')
      productos.push(new Producto(prompt(" Nombre del Producto que desea agregar").toLowerCase(), parseInt(prompt(" precio")), parseInt(prompt("Cantidad "))));
      console.log(productos); //MUESTRA POR CONSOLA LOS PRODUCTOS AGREGADOS
    }
   
  case "3":
    {
      let productoBuscado = prompt("Ingrese un producto a buscar en su carrito").toLowerCase();
      const productoEncontrado = productos.find(producto => producto.nombre == productoBuscado);
      if (productoEncontrado.nombre == productoBuscado) {
        alert("Ya se cuenta con el Producto en el Carrito");
        console.log(productoEncontrado);
      }   
      else alert('No se tiene agregado dicho producto en su carrito')
      console.log(productos);
    }
     

  case "4":
      {
        let selec= prompt('Desea eliminar algun producto');
          if (selec=='si') {
          
const productEliminar = prompt("Escriba el nombre del producto").toLowerCase(); 
let encontrarIndice= productos.findIndex( producto=> producto.nombre==productEliminar)
console.log(encontrarIndice);
productos.splice(encontrarIndice,1)
console.log(productEliminar);
console.log(productos);

} }


case "5":
  {
  const total = productos.reduce( (acc, p) => acc + (p.precio * p.cantidad),0)
   alert('El total de su compra es  ' + total );
    console.log(total);
  } 
break;

}

