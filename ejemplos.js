// Ejercicio 1
const exercise1 = (num) =>{
    num = parseFloat(prompt('Ingresa un numero para sumar'))
    for(let x=0;x<=15;++x){
        let result = (num+5.3)+(x*.5);
        console.log(result);
    }
}

// Ejercicio 2
const exercise2 = (textInserted) =>{
    let  cont = 0, concatText = 'While Js'; ESC = 'esc'
    
    while(textInserted != ESC.toLocaleLowerCase()){
        textInserted = prompt('(While) Ingresa cualquier texto/numero ("esc" para que se detenga)')
        cont++;
        console.log(`Indice ${cont} | Texto: ${textInserted} - ${concatText}`)
    }
}

const exercise2_1 = (textInserted) =>{
    let  cont = 0, concatText = 'Do-While Js'; ESC = 'esc'
    do{
        textInserted = prompt('Do-(While) Ingresa cualquier texto/numero ("esc" para que se detenga)')
        cont++;
        console.log(`Indice ${cont} | Texto: ${textInserted} - ${concatText}`)
    }while(textInserted != ESC.toLocaleLowerCase());
}

// Ejercicio 3
const exercise3 = (num) =>{
    num = prompt('Cuantas veces (En numeros) tendre que repetir lo mismo?')

    if(isNaN(num)){ alert('Ingresa un valor numerico'); }
    
    else{ 
        let newNum = Math.round(parseInt(num))
        for(let x=1;x<=newNum;x++){ console.log('Yo soy... inebitable'); }
    }

}


console.log(exercise1());
console.log(exercise2());
console.log(exercise2_1());
console.log(exercise3());