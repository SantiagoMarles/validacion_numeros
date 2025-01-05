const num1 = document.getElementById('primer_numero');
//* Elemento del boton
    primerBoton = document.getElementById('guardar_primero');
    
const num2 = document.getElementById('segundo_numero');
//* Elemento del boton
    segundoBoton = document.getElementById('guardar_segundo');
    
const num3 = document.getElementById('tercer_numero');
//* Elemento del boton
    tercerBoton = document.getElementById('guardar_tercero');
    
//* Elemento del boton que valida si se repiten
const validaNumero = document.getElementById('numero_repetido');

//& DOM BOTON DE ORDENAR
const ordenarArray = document.getElementById('ordenar');

let numeroUno, numeroDos, numeroTres;
let numerosRepetidos = []

//! Funciones para almacenar valores con el click en el boton:
primerBoton.addEventListener('click', function (){
    numeroUno = parseInt(num1.value);
    primerBoton.style.backgroundColor = 'green';
    primerBoton.style.color = 'white';
    primerBoton.innerText = 'Se guardo Correctamente 😎';
    alert('Número guardado correctamente');
})

segundoBoton.addEventListener('click', function (){
    numeroDos = parseInt(num2.value);
    segundoBoton.style.backgroundColor = 'green';
    segundoBoton.style.color = 'white';
    segundoBoton.innerText = 'Se guardo Correctamente 😎';
    alert('Número guardado correctamente');
})

tercerBoton.addEventListener('click', function(){
    numeroTres = parseInt(num3.value);
    tercerBoton.style.backgroundColor = 'green';
    tercerBoton.style.color = 'white';
    tercerBoton.innerText = 'Se guardo Correctamente 😎';
    alert('Número guardado correctamente');
})

//^ Función para validar el array que almacena numeros repetidos.
validaNumero.addEventListener('click', function seRepiten(){

    let numerosRepetidos = [];

    if (numeroUno === numeroDos || numeroUno === numeroTres) {
        numerosRepetidos.push(`${numeroUno} Su primera elección`);
    }
    if (numeroDos === numeroUno || numeroDos === numeroTres) { 
        numerosRepetidos.push(`${numeroDos} Su segunda elección`);
    }
    if (numeroTres === numeroUno || numeroTres === numeroDos){
        numerosRepetidos.push(`${numeroTres} Su tercera elección`);
    }

    if (numerosRepetidos.length > 0) {
        alert('Números repetidos: ' + numerosRepetidos.join(', '));
    } else {
        alert('No hay números repetidos.');
    }

    validaNumero.style.backgroundColor = '#949494';
    validaNumero.style.color = 'white';

});

//^ Función Ordernar Array
ordenarArray.addEventListener('click', function () {
    if(numeroUno !== undefined && numeroDos !== undefined && numeroTres !== undefined){
        let ordenado = [numeroUno, numeroDos, numeroTres];
        ordenado.sort((a, b) => a - b);
        alert('Array ordenado: ' + ordenado.join(', '));
    }else {
        alert('Por favor guardar todos los numeros antes de ordenar');
    }
    
    ordenarArray.style.backgroundColor = '#949494';
    ordenarArray.style.color = 'white';
});
