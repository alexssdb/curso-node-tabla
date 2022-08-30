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

const getEmpleado = ( id ) => {
    
    return new Promise(( resolve, reject ) => {
        
        const empleado = empleados.find( e => e.id === id)?.nombre;

        ( empleado )
            ? resolve(empleado)
            : reject(`No existe el empleado con el id ${id}.`);
    });
}

const getSalario = ( id ) => {
    
    return new Promise(( resolve, reject ) => {
        
        const salario = salarios.find( s => s.id === id)?.salario;

        ( salario )
            ? resolve(salario)
            : reject(`No existe salario con el id ${id}.`);
    });
}

const getIinfoUsuario = async(id) =>{

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El empleado ${empleado} tiene un salario de ${salario}€.`;
    }catch(error){
        throw error;
    }
    
}

const id  = 5;

getIinfoUsuario(id)
    .then( msg => {
        console.log('Todo bien!');
        console.log(msg);
    })
    .catch( err => {
        console.log('Todo mal!');
        console.log(err);
    });

