//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')
const argv = require('yargs').options({
     direccion:{
          alias: 'd',
          desc: 'direccion de la ciudad',
          demand: true
     }
}).argv;
let getInfo = async (direccion)=>{
     try{
          let coors= await lugar.getLugarLatLng(direccion);
          let temp = await clima.getClima(coors.lat,coors.lng);
          return 'el clima en '+ coors.direccion+' es de '+temp+' grados'
     } catch(e){
          return 'no se puede saber el clima en '+direccion;
     }
     
}

getInfo(argv.direccion)
     .then(mensaje=>console.log(mensaje))
     .catch(e=> console.log(e));
// lugar.getLugarLatLng( argv.direccion)
//      .then(resp=>{
//           console.log(resp);
//      })
//      .catch(e=> console.log(e));
// clima.getClima(20.6596988,-103.3496092)
//      .then(temp=> console.log(temp))
//      .catch(e => console.log(e))
//console.log(argv.direccion);

//console.log(argv.direccion);