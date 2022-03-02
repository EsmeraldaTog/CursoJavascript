/*console.log("Calculadora de Macronutrientes: Es decir cuantos carbohidratos, grasas y Proteinas deberas consumir")

let nombre = prompt("Ingresa tu Nombre");
let edad = parseInt(prompt("Ingresa tu edad"));
let estatura= parseInt(prompt("Ingresa tu Estatura en CM"))
let peso=parseInt(prompt("Ingresa tu peso"))
let sexo= prompt("Indica con F(mujer) y M (hombre)")

let metabolismoBasal


//Algoritmo para calcular Macronutrientes
//paso 1.- Calcular tu metabolismo basal : cantidad de calorias que gasta tu cuerpo estando en reposo



if (sexo == 'femenino') {
    metabolismoBasal= ((peso * 10)+ (estatura * 6.25)- (edad * 5) - 161)
    
}
else
{
    metabolismoBasal= ((peso * 10)+ (estatura * 6.25)- (edad * 5) + 5)
}


console.log(metabolismoBasal)

//Paso 2.-Multiplicar el metabolismoBasal por la actividad fisica realizada para calcular calorias a consumir diarias
let caloriasDiarias= 0;

let actividadFisica =prompt("Indica el nivel de Actividad Fisica")
switch (actividadFisica) {
    case '1':
   caloriasDiarias= metabolismoBasal * 1.55
        break;
    case  '2':
    caloriasDiarias= metabolismoBasal * 1.85
        break;

    case '3':
    caloriasDiarias= metabolismoBasal * 2.2
    break;

    case '4':
    caloriasDiarias= metabolismoBasal * 2.4

    default:
        alert('No se introdujo un Valor valido')

 
}
console.log(caloriasDiarias)
let caloriasObjetivo = 0
// PASO 3 indicar si requiere perder peso, mantenerse o Ganar peso 
let objetivo= prompt('indica tu objetivo ')
while (objetivo =='perder') {
    caloriasObjetivo= caloriasDiarias - 500;
    console.log(caloriasObjetivo)
}
*/
function limpiar() {
    document.getElementById('formulario1').reset();
}



function calculo1(){
  let edad = parseInt(document.getElementById('edad').value)
  let peso = parseInt(document.getElementById('peso').value)
  let estatura = parseInt(document.getElementById ('estatura').value)
  let sexo = document.getElementById('radiogenero').cheked
  let metabolismoBasal= 0
  let actividadFisica= document.getElementById('actividadFisica').value
  let caloriasDiarias = 0
  let objetivo=document.getElementById('objetivo').value
  let caloriasObjetivo = 0
  let cantidadProteinas= 0
  let cantidadGrasas= 0
  let cantidadCarbohidratos= 0


  while ( document.getElementById('').value <= 50) {
    alert('El peso no es valido para hacer los calculos')
    break;
    
}

  //Algoritmo para calcular Macronutrientes
//paso 1.- Calcular tu metabolismo basal : cantidad de calorias que gasta tu cuerpo estando en reposo
//(peso * 10) + (estatura * 6.25) - (edad * 5) ) si es mujer se resta 161 y si es hombre se suma 5



if (document.getElementById('femenino').checked == true) {
    metabolismoBasal = ((peso * 10) + (estatura * 6.25) - (edad * 5) )- 161
    
}
else
{
    metabolismoBasal =  ((peso * 10) + (estatura * 6.25) - (edad * 5) ) + 5
}



//Paso 2.-Multiplicar el metabolismoBasal por la actividad fisica realizada para calcular calorias a consumir diarias para mantenimiento

switch (actividadFisica) {
    case '1':
   caloriasDiarias= metabolismoBasal * 1.55
        break;
    case  '2':
    caloriasDiarias= metabolismoBasal * 1.85
        break;

    case '3':
    caloriasDiarias= metabolismoBasal * 2.2
    break;

    case '4':
    caloriasDiarias= metabolismoBasal * 2.4

   
    default:
        
       
       
}
/// paso 3 elegir el objetivo que se tiene si quieres perder peso, ganar peso o mantenerse
// si se quiere perder peso restar 500 calorias y si se quiere ganar aumentar 500 , si se desea mantener el peso  las caloriasDiarias no sufre ningun ajuste

//para calcular las proteinas se multiplica peso por 3g que es lo recomendado si se quiere perder peso
// si se quiere ganar peso lo recomendable es 2g de proteina por peso
// si se quiere mantener el peso lo recomendable es al igual que si se quiere perder 3 g
if (objetivo=='perder') {
    caloriasObjetivo = caloriasDiarias -500
    cantidadProteinas = peso * 3

} 
else { 
    if(objetivo =='ganar'){
caloriasObjetivo = caloriasDiarias + 500
cantidadProteinas= peso * 2
    }
    else {
        caloriasObjetivo = caloriasDiarias
        cantidadProteinas = peso * 3 
    }
    
}

cantidadGrasas = parseInt((caloriasObjetivo * 0.3)  / 9)
cantidadCarbohidratos= parseInt(( caloriasObjetivo - (cantidadProteinas * 4 + cantidadGrasas * 9)) / 4)



console.log(caloriasObjetivo)

console.log(caloriasDiarias)
console.log(cantidadProteinas)
console.log('la cantidad de grasas a consumir deberian ser  '+cantidadGrasas )
console.log('la cantidad de Carbohidratos a consumir deberian ser  '+cantidadCarbohidratos )


document.getElementById('resultado').innerHTML= metabolismoBasal;
document.getElementById("mantenimiento").innerHTML = caloriasDiarias;
document.getElementById("objetivo1").innerHTML = caloriasObjetivo;
}
