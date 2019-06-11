const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=39bce51468a9602af3977c5d01bef671&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}