

///incorporacion de un arreglo mediante prompts en el cual se ingresan productos
// se solicita al usuario indicar la cantidad de productos a ingresar
//se solicita los datos  de nombre, precio y existencia finaliza el ciclo hasta que se ingrese la cantidad de productos que se indico mediante el primer prompt
// se muestra por consola los datos que contiene el arreglo
// se muestra mediante un alert el tamaño del arreglo 
// se realiza una busqueda dentro del arreglo de un producto solicitado mediante prompt//
//TODOS LOS RESULTADOS SE MUESTRAN POR CONSOLA
alert('INGRESO DE PRODUCTOS AL CATALOGO')

class Producto{

    constructor (nombre,precio, existencia) {
       this.nombre=  nombre,
       this.precio=precio,
       this.existencia=existencia
       
    }


}
//indica cantidad de productos a ingresar
const productos= []
 let cantidadProd=parseInt(prompt('Indique cantidad de Productos a Ingresar'))
for (let i = 0; i< cantidadProd; i++) {
productos.push(new Producto(prompt(' Nombre del Producto'),parseInt(prompt(' precio')), parseInt(prompt('Cantidad existente'))))
 }


 alert(`Se han Ingresado al Catalogo ${productos.length} productos`)
console.log(productos);



//busqueda de productos en el array

let buscaProduct= prompt('Desea buscar un productos?/ indique si /no')
if (buscaProduct=='si') {

    let productoBuscado= prompt('Nombre del Producto')
    let busqueda= productos.filter(buscar => buscar.nombre ==productoBuscado)
   
   
    console.log(busqueda);
}


