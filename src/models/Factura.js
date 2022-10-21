const Factura = {};
db = require("../db");
const moment = require('moment');
let date_ob = new Date();
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let date = ("0" + date_ob.getDate()).slice(-2);
let year = date_ob.getFullYear();

Factura.claveacceso = (datos) => {

  function claveaccseso(ruc) {
    const issuedAt = date + month + year; //format(Date.now(), "ddMMyyyy"); //Fecha de Emision 
    const voucherType = "01"; //Tipo de Comprobante//1 factura, 4 nota de crédito, 5 nota de débito, 6 guía de remisión, 7 retención
    const RUCNumber = ruc; //Numero de RUC 
    const environmentType = "1"; //Tipo de Ambiente
    const range = "001001"; //Serie Conformado por el codigo de establecimiento (3 digitos) y codigo del punto de emision (3 digitos)
    //Los dispositivos de emicion de facturas dentro de cada establecimento. 
    const voucherNumber = "000000004"; //Numero de Comprobante, es un numero secuencia adicionando 1 por cada factura realizada
    const generatedNumericalCode = "".concat(date + month, parseInt(voucherType), range.slice(0, -3)); //Codigo Numerico
    const emissionType = '1';//1 normal

    // res.setHeader('Content-Type', 'application/json');
    return (JSON.stringify({
      issuedAt: year + "-" + month + "-" + date,
      voucherType: voucherType,
      RUCNumber: RUCNumber,
      environmentType: environmentType,
      range: range.substr(0, 3),
      pemi: range.substr(3, 5),
      voucherNumber: voucherNumber,
      numericalCode: generatedNumericalCode,
      emissionType: emissionType,
      AccessKey: generateAccessKey(issuedAt, voucherType, RUCNumber, environmentType, range, voucherNumber, generatedNumericalCode, emissionType)
    }));
  }

  function p_calcular_digito_modulo11(numero) {
    var digito_calculado = -1;

    if (typeof (numero) == 'string' && /^\d+$/.test(numero)) {

      var digitos = numero.split('').map(Number); //arreglo con los dígitos del número

      digito_calculado = 11 - digitos.reduce(function (valorPrevio, valorActual, indice) {
        return valorPrevio + (valorActual * (7 - indice % 6));
      }, 0) % 11;

      digito_calculado = (digito_calculado == 11) ? 0 : digito_calculado; //según ficha técnica
      digito_calculado = (digito_calculado == 10) ? 1 : digito_calculado; //según ficha técnica
    }
    return digito_calculado;
  }

  function generateAccessKey(issuedAt, voucherType, RUCNumber, environmentType, range, voucherNumber, numericalCode, emissionType) {

    let accessKey = "";
    accessKey = accessKey.concat(
      issuedAt,//8
      voucherType,//2
      RUCNumber,//13
      environmentType,//1
      range,//6
      voucherNumber,//9
      numericalCode,//8
      emissionType,//1
      //Total: 48 digitos
    );
    let accessKeyWithCheckDigit = "";
    accessKeyWithCheckDigit = accessKeyWithCheckDigit.concat(accessKey, p_calcular_digito_modulo11(accessKey));
    // console.log("accessKeyWithCheckDigit: ", accessKeyWithCheckDigit);
    // console.log("accessKeyWithCheckDigit length: ", accessKeyWithCheckDigit.length);
    return accessKeyWithCheckDigit;
  }
  return JSON.parse(claveaccseso(datos.ruc))
}







// Factura.get = async () => {

//     const producto = await db.query('SELECT * FROM productos');

//     return producto;
// }

Factura.create = async (dataa) => {
  console.log(fechaor(dataa.issuedAt));

  var axios = require('axios');
  var data = JSON.stringify({
    "accessKeyId": process.env.AWS_accessKeyId,
    "secretAccessKey": process.env.AWS_secretAccessKey,
    "ambiente": dataa.environmentType,
    "tipoEmision": dataa.emissionType,
    "razonSocial": dataa.razonsocial,
    "nombreComercial": dataa.nom_comercial,
    "ruc": dataa.RUCNumber,
    "claveAcceso": dataa.AccessKey,
    "codDoc": dataa.voucherType,
    "estab": dataa.range,
    "ptoEmi": dataa.pemi,
    "secuencial": dataa.voucherNumber,
    "dirMatriz": dataa.dirMatriz,
    "agenteRetencion": dataa.fac_agenterete,
    "regimenMicroempresas": dataa.fac_contrmicroempresa,
    "fechaEmision": fechaor(dataa.issuedAt),
    "dirEstablecimiento": dataa.sucursal_factura,
    "obligadoContabilidad": dataa.obligadocontabilidad,
    "tipoIdentificacionComprador": dataa.tipoidentificacion_cliente,
    "razonSocialComprador": dataa.nombresrs_cliente,
    "identificacionComprador": dataa.identificacion_cliente,
    "totalSinImpuestos": dataa.total_sin_in,
    "totalDescuento": dataa.descuento_total,
    "totalImpuestocodigo": dataa.codigo_total_impuesto,
    "totalImpuestocodigoPorcentaje": dataa.porcentaje_total_impuesto,
    "totalImpuestobaseImponible": dataa.baseinponible_total,
    "totalImpuestoarifa": dataa.tarifaimponible_total,
    "totalImpuestovalor": dataa.valorimponible_total,
    "propina": dataa.total_propina,
    "importeTotal": dataa.total_importe,
    "moneda": "DOLAR",
    "pagoformaPago": dataa.fotmade_pago,
    "pagototal": dataa.total_pago,
    "plazo": dataa.plazo_pago,
    "unidadTiempo": dataa.tiempo_pago,
    "detalles": jsonproductos(dataa),
    "campoAdicional":
    {
      "Direccion": dataa.direccion_cliente,
      "Telefono": dataa.telefono_cliente,
      "Email": dataa.correo_cliente
    }

  });

  var config = {
    method: 'post',
    url: 'http://3.132.149.137/api/factura',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  return dataa
}

function jsonproductos(dataa) {

  let data = [];
if(dataa.codigo_p[0].length > 1 && dataa.codigo_s[0].length >1 && dataa.detalle_p[0].length>1){
  for (i = 0; i < dataa.codigo_p.length; i++) {
    data.push({
      "codigoPrincipal": dataa.codigo_p[i],
      "codigoAuxiliar": dataa.codigo_s[i],
      "descripcion": dataa.detalle_p[i],
      "cantidad": dataa.cantidad_p[i],
      "precioUnitario": dataa.preciouni_p[i],
      "descuento": dataa.descuento_p[i],
      "precioTotalSinImpuesto": dataa.precioto_p[i],
      "impuestocodigo": dataa.detalleim_cod[i],
      "impuestocodigoPorcentaje": dataa.detalleim_porc[i],
      "impuestotarifa": dataa.d_trifa[i],
      "impuestobaseImponible": dataa.d_baseinpo[i],
      "impuestovalor": dataa.d_valor[i],
      "detAdicionalvalor": dataa.d_adi_valor[i],
      "detAdicionalnombre": dataa.d_adi_nombre[i]
    })

  }
}else{
  data.push({
    "codigoPrincipal": dataa.codigo_p,
    "codigoAuxiliar": dataa.codigo_s,
    "descripcion": dataa.detalle_p,
    "cantidad": dataa.cantidad_p,
    "precioUnitario": dataa.preciouni_p,
    "descuento": dataa.descuento_p,
    "precioTotalSinImpuesto": dataa.precioto_p,
    "impuestocodigo": dataa.detalleim_cod,
    "impuestocodigoPorcentaje": dataa.detalleim_porc,
    "impuestotarifa": dataa.d_trifa,
    "impuestobaseImponible": dataa.d_baseinpo,
    "impuestovalor": dataa.d_valor,
    "detAdicionalvalor": dataa.d_adi_valor,
    "detAdicionalnombre": dataa.d_adi_nombre
  })
}

  console.log(data)
  return data
}
function fechaor(fecha) {
  let fec = fecha.split('-')
  return fect = fec[2] + "/" + fec[1] + "/" + fec[0]
}





module.exports = Factura;