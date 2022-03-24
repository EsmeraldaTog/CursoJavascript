console.log('Clases con Objetos');


class Personaje {

constructor (nombre, vida, poder){
    this.nombre= nombre;
    this.vida= vida
    this.poder= poder
}

atacar(){
    this.poder= this.poder +1

}
 recibirAtaque(){

    this.vida= this.vida-1
 }

 mostrarDatos(){
 console.log(`${this.nombre} tiene ${this.vida} vida y ${this.poder}poder `);
 }
}

const hobbit1 = new Personaje('frodo',10, 50)

hobbit1.mostrarDatos();