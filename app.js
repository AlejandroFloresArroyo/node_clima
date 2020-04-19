const lugar = require('./Lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);


// lugar.getLugarLatLng(argv.direccion)
//         .then(console.log)
//         .catch(console.log);

// clima.getClima(40.78, -74)
//         .then(console.log)
//         .catch(console.log);


const getInfo = async (direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.dir} es de ${ temperatura }`;
        
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }

}



getInfo (argv.direccion)
    .then(console.log)
    .catch(console.log);
