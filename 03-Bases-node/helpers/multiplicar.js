const fs = require('fs');

const crearArchivo = async (base = 5, listar = false) =>{

    try {
        
        let salida = '';

        for( let i = 1; i<=10; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}