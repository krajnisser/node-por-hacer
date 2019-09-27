const fs = require('fs');

const colors = require('colors');


let listadoPorHacer = [];


const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
        // console.log('The file has been saved!');
      }
    );

}


const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');
        
    } catch (error) {

        listadoPorHacer = [];
        
    }


}


const getListado = () => {

    cargarDB();

    return listadoPorHacer;

};


const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }

};


const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    console.log('Longitud de listadoPorHacer:', listadoPorHacer.length);
    console.log('Longitud de nuevoListado:', nuevoListado.length);

    if(nuevoListado.length == listadoPorHacer.length-1){
        listadoPorHacer = nuevoListado;
        console.log('Nueva longitud de listadoPorHacer:', listadoPorHacer.length);
        guardarDB();
        return `La tarea ${descripcion} ha sido borrada con éxito`;
    }else{
        return `No existe la tarea ${descripcion}`;
    }
    
};


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;

};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}