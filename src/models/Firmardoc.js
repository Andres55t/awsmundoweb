const Firmardoc = {};
db = require("../db");

Firmardoc.firma = async (datos,body) => {
  const clva = await db.query('SELECT * FROM claveacc');
  let accessKeyId=atob(clva[0].claveacccol)
  let secretAccessKey=atob(clva[0].claveacccol1)
    var axios = require('axios');

params = {

    "firma" :body.firmafirmar,
    "contraseña":body.password_firma, 
    "axml":body.factura_firmar,
    "accessKeyId": accessKeyId,
    "secretAccessKey": secretAccessKey+clva[0].claveacccol2,
    "ruc":datos.ruc
  }

let res = await axios.post('http://3.132.149.137/api/firmar', params);

return res.data;

}



 module.exports = Firmardoc;