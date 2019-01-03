const axios = require('axios');


const getLugarLatLng= async(direccion)=>{
     let encodedURL = encodeURI( direccion)
     let resp = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+encodedURL+'&key=AIzaSyAC1KC6KOc0L6M0-KXIbRn87kc9O9HeA7c')
     if(resp.data.status==="ZERO_RESULTS"){
          throw new Error('no hay respuesta de esta hubicacion '+direccion)
     }


          let location = resp.data.results[0];
          let coors = location.geometry.location;

     return{
          direccion: location.formatted_address,
          lat: coors.lat,
          lng: coors.lng
     }
}

module.exports ={
     getLugarLatLng
}