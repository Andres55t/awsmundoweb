range.oninput = function () {
    if (range.value.length==3){
    claveaccseso(RUCNumber.value, issuedAt.value,voucherType.value,environmentType.value,range.value+pemi.value,voucherNumber.value,emissionType.value);
    }
};
pemi.oninput = function () {
    if (pemi.value.length==3){
    claveaccseso(RUCNumber.value, issuedAt.value,voucherType.value,environmentType.value,range.value+pemi.value,voucherNumber.value,emissionType.value);
    }
};
issuedAt.oninput = function () {
    claveaccseso(RUCNumber.value, issuedAt.value,voucherType.value,environmentType.value,range.value+pemi.value,voucherNumber.value,emissionType.value);

};

environmentType.oninput = function () {
    claveaccseso(RUCNumber.value, issuedAt.value,voucherType.value,environmentType.value,range.value+pemi.value,voucherNumber.value,emissionType.value);


};
voucherNumber.oninput = function () {
    claveaccseso(RUCNumber.value, issuedAt.value,voucherType.value,environmentType.value,range.value+pemi.value,voucherNumber.value,emissionType.value);


};
var selectElement = document.getElementById('sucursal_factura');

selectElement.addEventListener('change',  function(){
  
const cambio=  document.getElementById('sucursal_factura')
var selected = cambio.options[cambio.selectedIndex].text
let codigosucursal=selected.split("-")
console.log(codigosucursal[2])
document.getElementById('range').value=codigosucursal[2]
claveaccseso(RUCNumber.value, issuedAt.value,voucherType.value,environmentType.value,codigosucursal[2]+pemi.value,voucherNumber.value,emissionType.value);

  
});


function claveaccseso(RUCNumber,fecha,voucherType,environmentType,range,voucherNumber,emissionType) {
    let fullfecha=fecha.split("-")
    const month =fullfecha[1] ;
    const date =fullfecha[2]  ;
    const year = fullfecha[0] ;
    const issuedAt = date + month + year;
    const generatedNumericalCode = "".concat(date + month, parseInt(voucherType), range.slice(0, -3)); 
     numericalCode.value = generatedNumericalCode;

    AccessKey.value =generateAccessKey(issuedAt, voucherType, RUCNumber, environmentType, range, voucherNumber, generatedNumericalCode, emissionType)

}

function p_calcular_digito_modulo11(numero) {
    var digito_calculado = -1;

    if (typeof (numero) == 'string' && /^\d+$/.test(numero)) {

        var digitos = numero.split('').map(Number); 

        digito_calculado = 11 - digitos.reduce(function (valorPrevio, valorActual, indice) {
            return valorPrevio + (valorActual * (7 - indice % 6));
        }, 0) % 11;

        digito_calculado = (digito_calculado == 11) ? 0 : digito_calculado; 
        digito_calculado = (digito_calculado == 10) ? 1 : digito_calculado; 
    }
    return digito_calculado;
}

function generateAccessKey(issuedAt, voucherType, RUCNumber, environmentType, range, voucherNumber, numericalCode, emissionType) {

    let accessKey = "";
    accessKey = accessKey.concat(
        issuedAt,
        voucherType,
        RUCNumber,
        environmentType,
        range,
        voucherNumber,
        numericalCode,
        emissionType,
    );
    let accessKeyWithCheckDigit = "";
    accessKeyWithCheckDigit = accessKeyWithCheckDigit.concat(accessKey, p_calcular_digito_modulo11(accessKey));
    return accessKeyWithCheckDigit;
}

(function() {
    const myModal = document.getElementById('myModal')
    
}());