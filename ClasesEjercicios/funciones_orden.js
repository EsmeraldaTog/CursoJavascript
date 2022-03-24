console.log('retornar funciones');

function regresaFuncion() {
    return()=> {console.log('hola mundo')}
    
}

// regresaFuncion()()

const nuevaFuncion=regresaFuncion()
// va a contener
// ()=> {console.log('hola mundo')
nuevaFuncion()