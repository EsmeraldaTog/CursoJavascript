console.log('funcion constructora');

function Alumno (nombre, edad, nacionalidad) {
    this.name= nombre;
    this.age=edad;
    this.nationality= nacionalidad;
    this.mostrarDatos = function (){
     console.log(this.name,this.age,this.nationality) 
        
    }
    
}
const alumno1= new Alumno('Roberto',25,'Argentina')


console.log(alumno1);
alumno1.mostrarDatos();

//const alumnoDesdeEntrada = new Alumno (prompt('inserte el nombre'),parseInt(prompt('Inserte la edad')), prompt('inserte la nacionalidad'))

// console.log(alumnoDesdeEntrada);