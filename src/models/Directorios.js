const Directorios = {};
db = require("../db");

Directorios.firma = async (datos) => {
    var axios = require('axios');

params = {
    "accessKeyId": process.env.AWS_accessKeyId,
    "secretAccessKey": process.env.AWS_secretAccessKey,
  "ruc": datos.ruc,
   "carpeta": "FIRMA"
  }

let res = await axios.post('http://3.132.149.137/api/directorio', params);

return listar(res.data);

}

Directorios.generados = async (datos) => {
    var axios = require('axios');

params = {
    "accessKeyId": process.env.AWS_accessKeyId,
    "secretAccessKey": process.env.AWS_secretAccessKey,
  "ruc": datos.ruc,
   "carpeta": "GENERADOS"
  }

let res = await axios.post('http://3.132.149.137/api/directorio', params);

return listar(res.data);

}
Directorios.firmados = async (datos) => {
    var axios = require('axios');

params = {
    "accessKeyId": process.env.AWS_accessKeyId,
    "secretAccessKey": process.env.AWS_secretAccessKey,
  "ruc": datos.ruc,
   "carpeta": "FIRMADOS"
  }

let res = await axios.post('http://3.132.149.137/api/directorio', params);
return listar(res.data);

}

function listar(response){
    let data=[]
for(i=0;i<response.length;i++){
let directorio =response[i].Key.split("/")
data.push({ "archivo":directorio[2]})
}
return data
}

module.exports = Directorios;