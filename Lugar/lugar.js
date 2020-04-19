const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    const encodedURL = encodeURI(direccion);

    let instance = axios.create({

        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "939b84dd66msh72f7ff90a0fa9e8p178148jsn5e2da5077988"
        }

    });
    
    
    const res = await instance.get();

    if (res.data.Results.length === 0)
        throw new Error(`No hay resultados para ${direccion}`);

    const data = res.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}