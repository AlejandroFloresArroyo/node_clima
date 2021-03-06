const axios = require('axios');

const getClima = async (lat, long) => {

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=32f843d833c38373032f825c4a92418a&units=metric`);
    return res.data.main.temp;

}


module.exports = {
    getClima
}