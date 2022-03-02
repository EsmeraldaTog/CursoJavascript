

let seleccionar = prompt(" Opcion: 1 = Programa que compara numero\n Opcion 2: Programa que muestra los divisores de un Numero")


switch (seleccionar) {
    case '1':
let numero1= parseInt (prompt('Introduce un primer numero'))
let numero2= parseInt(prompt('introduce un segundo Numero'))



if ( numero1 < numero2) {
    document.write(` ${numero1} es menor que numero  ${numero2}`)
} 
else if( numero1 > numero2){
  document.write(` ${numero1} es mayor que  numero ${numero2}`)
}

else if( numero1 == numero2){
    document.write(` ${numero1} es igual que  numero ${numero2}`)
}
        break;

        case '2':
//Muestra los numeros divisores de un numero : los divisores son el numero  que al dividir el residuo es igual a 0

let numero = parseInt(prompt('Introduce un numero'))


for (let i = 1; i<=numero; i++) {
    if (numero % i==0 ) {
       
        document.write(` | ${i}`)
        console.log('los numeros divisibles son ' + i)
    }
}
 break;



    default: 
    alert('Opcion seleccionada no valida.')
        break;
        
}

//PROGRAMA QUE PIDA DOS NUMEROS Y QUE NOS DIGA CUAL ES MAYOR , EL MENOR Y SI SON IGUALES





