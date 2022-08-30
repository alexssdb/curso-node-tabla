const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Alex'
    },
    {
        id: 3,
        nombre: 'Pepe'
    },
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    },
    {
        id: 3,
        salario: 3000
    },
]

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( e => e.id === id)?.nombre;
    
    if( empleado ){
        callback(null, empleado);
    }else{
        callback(`El empleado con id ${id} no existe!`);
    }

}

const getSalario = ( id, callback ) => {
    const salario = salarios.find( e => e.id === id)?.salario;
    
    if( salario ){
        callback(null, salario);
    }else{
        callback(`El empleado con id ${id} no tiene salario!`);
    }
   
}

let persona = 5;

getEmpleado(persona, (err, empleado) => {
    if(err){
        console.log('Error!');
        return console.log(err);
    }

    getSalario(persona, (err, salario) => {
        if(err){
            return console.log(err);
        }else{
            console.log(`El empleado ${empleado} tiene un salario de ${salario}€.`);
        }
    })

});

