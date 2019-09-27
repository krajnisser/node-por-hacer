// const {argv} = require ('yargs');
const {argv} = require('./config/yargs');

const {crear, getListado, actualizar, borrar} = require('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0];

switch(comando){

    case 'crear':
        let tarea = crear(argv.description);
        console.log(tarea);
    break;

    case 'listar':
    
        let listado = getListado();

        for(let tarea of listado){
            console.log('======POR HACER======='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('======================\n'.green)
        }

    break;

    case 'actualizar':
        let actualizado = actualizar(argv.description, argv.completado);
        console.log(actualizado);
    break;

    case 'borrar':
        let borrado = borrar(argv.description);
        console.log(borrado);
    break;

    default:
        console.log(`Comando ${comando} no reconocido`);

}