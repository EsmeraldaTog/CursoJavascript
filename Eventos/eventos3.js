console.log('Eventos 3');

const link= document.getElementById('send')

link.addEventListener=('click', clickEnEnviar)

function clickEnEnviar(evento){
    evento.preventDefault()
    console.log('click en el enlace');
    console.log(evento);
}

