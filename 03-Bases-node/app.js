const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(colors.green(nombreArchivo), 'creado'.rainbow))
    .catch(err => console.log(err));