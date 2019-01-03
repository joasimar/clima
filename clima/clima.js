const axios = require('axios');
const getClima = async(lat, lng)=>{

     let resp = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&units=metric&appid=ad4967a3336740bc8b33b5c2bedc0e12')

     return resp.data.main.temp;

}

module.exports= {
     getClima

}