var nombre = 'Alex'; // variable global, se puede usar dentro del if.
let nombre2 = 'Pepe'; // variable local, el let dentro del if es otra variable.
const nombre3 = 'Jaime';
var nombre4 = 'Felipe'; // var no se debe usar.

if( true ){
    nombre = 'Magneto';
    let nombre2 = 'Jaime';
    console.log('Nombre2: ', nombre2);
    // nombre3 = 'Lucas'; //una constante no se puede modificar!
}

console.log('Nombre: ', nombre);
console.log('Nombre2: ', nombre2);