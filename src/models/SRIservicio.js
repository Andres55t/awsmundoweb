const SRIservicio = {};
db = require("../db");

SRIservicio.enviarsri = async (datos, body) => {
  const clva = await db.query('SELECT * FROM claveacc');
  let accessKeyId=atob(clva[0].claveacccol)
  let secretAccessKey=atob(clva[0].claveacccol1)
  var axios = require('axios');

  params = {

    "archi": body.factura_enviarsri,
    "accessKeyId": accessKeyId,
    "secretAccessKey": secretAccessKey+clva[0].claveacccol2,
    "ruc": datos.ruc


  }

  let res = await axios.post('http://3.132.149.137/api/serviciosri', params);

  return res.data;

}



module.exports = SRIservicio;