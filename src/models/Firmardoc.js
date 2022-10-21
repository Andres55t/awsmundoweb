const Firmardoc = {};
db = require("../db");

Firmardoc.firma = async (datos,body) => {
  
    var axios = require('axios');

params = {

    "firma" :body.firmafirmar,
    "contraseña":body.password_firma, 
    "axml":body.factura_firmar,
    "accessKeyId": process.env.AWS_accessKeyId,
    "secretAccessKey": process.env.AWS_secretAccessKey,
    "ruc":datos.ruc
  }

let res = await axios.post('http://3.132.149.137/api/firmar', params);

return res.data;

}



 module.exports = Firmardoc;