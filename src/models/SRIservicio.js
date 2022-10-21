const SRIservicio = {};
db = require("../db");

SRIservicio.enviarsri = async (datos, body) => {
  console.log(body)
  var axios = require('axios');

  params = {

    "archi": body.factura_enviarsri,
    "accessKeyId": process.env.AWS_accessKeyId,
    "secretAccessKey": process.env.AWS_secretAccessKey,
    "ruc": datos.ruc


  }

  let res = await axios.post('http://3.132.149.137/api/serviciosri', params);

  return res.data;

}



module.exports = SRIservicio;