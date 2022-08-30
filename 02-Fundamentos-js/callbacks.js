// setTimeout( () => {
//     console.log('Hey!')
// }, 2000);

const getUsuarioByID = ( id, callback ) => {

    const usuario = {
        id,
        nombre: 'Alex'
    }

    setTimeout( () => {
        callback(usuario);
    }, 1500);
}

getUsuarioByID(10, ( usuario ) => {
    console.log(usuario);
});