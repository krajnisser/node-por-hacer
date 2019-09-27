const description = {
    demand: true,
    alias: 'd'
};

const completado = {
    alias: 'c',
    default: true
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        description
    })
    .command('actualizar', 'Actualiza el estado de una tarea completa', {
        description,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}