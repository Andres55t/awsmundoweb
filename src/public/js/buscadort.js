// function clickHandler() {
//     // Here, `this` refers to the element the event was hooked on
//     console.log(this.innerHTML)
// }
document.querySelectorAll('#tablapro td')
    .forEach(e => e.addEventListener("click", addRowHandlers));


function addRowHandlers() {
    var table = document.getElementById("tablapro");
    var rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
        var currentRow = table.rows[i];
        var createClickHandler = function (row) {
            return function () {
                var cell = row.getElementsByTagName("td")[0].innerHTML;
                var cell1 = row.getElementsByTagName("td")[1].innerHTML;
                var cell2 = row.getElementsByTagName("td")[2].innerHTML;
                var cell3 = row.getElementsByTagName("td")[3].innerHTML;
                
                var cell4 = row.getElementsByTagName("td")[4].innerHTML;
                var cell5 = row.getElementsByTagName("td")[5].innerHTML;
                var cell6 = row.getElementsByTagName("td")[6].innerHTML;
                var cell7 = row.getElementsByTagName("td")[7].innerHTML;
                agregarFila(cell, cell1, cell2, cell3, cell4, cell5, cell6, cell7)
            };
        };
        currentRow.onclick = createClickHandler(currentRow);
    }
}
const agregarFila = (codigop, codigos, detalle, pruni,codigoimpues,codigoporsentaj,detalleadicional_valor,detalleadicional_nombre) => {
console.log(codigoimpues)
    var pocicion = 0;
    var tabled = document.getElementById("tablafact");
    var rowsd = tabled.getElementsByTagName("tr");
    if (rowsd.length > 1) {
        var cont = 0;
        for (i = 1; i < rowsd.length; i++) {
            var cont = cont + 1;
            var aaa = document.getElementById('codigo_p' + i).value
            var aaa1 = document.getElementById('codigo_s' + i).value
            if (aaa == codigop && aaa1 == codigos) {
                pocicion = cont
            }
        }
        if (pocicion != 0) {

            document.getElementById('cantidad_p' + pocicion).value = parseInt(document.getElementById('cantidad_p' + pocicion).value) + 1
            clickHandler()
            pocicion = 0
        } else {
            document.getElementById('tablafact').insertRow(-1).innerHTML = `<td><input size=5  type="text" name="codigo_p" id="codigo_p${rowsd.length - 1}"value="${codigop}" readonly="readonly" >
            </td><td><input size=5 type="text" name="codigo_s" id="codigo_s${rowsd.length - 1}"value="${codigos}" readonly="readonly">
            </td><td><input type="text" name="detalle_p" id="detalle_p${rowsd.length - 1}"value="${detalle}" readonly="readonly" >
            </td><td><input class="  w-75" type="number" name="cantidad_p" id="cantidad_p${rowsd.length - 1}"value="${1}"></td>
            <td><input size=5 type="text" name="preciouni_p" id="preciouni_p${rowsd.length - 1}"value="${pruni} "readonly="readonly" ></td>
            <td><input size=5 type="text" name="descuento_p" id="descuento_p${rowsd.length - 1}"value="0.00" readonly="readonly" ></td>
            <td><input size=5 type="text" name="precioto_p" id="precioto_p${rowsd.length - 1}"value="${pruni}" readonly="readonly" ></td>
            <td><input size=5 type="text" name="detalleim_cod" id="detalleim_cod${rowsd.length - 1}"value="${codigoimpues}" readonly="readonly" ></td>
            <td><input size=5 type="text" name="detalleim_porc" id="detalleim_porc${rowsd.length - 1}"value="${codigoporsentaj}" readonly="readonly" ></td>
            <td><input size=5 type="text" name="d_trifa" id="d_trifa${rowsd.length - 1}"value="0.00" readonly="readonly" ></td>
            <td><input size=5 type="text" name="d_baseinpo" id="d_baseinpo${rowsd.length - 1}" value="${pruni}" readonly="readonly" ></td>
            <td><input size=5 type="text" name="d_valor" id="d_valor${rowsd.length - 1}" value="0.00" readonly="readonly" ></td>
            <td><input size=25 type="text" name="d_adi_valor" id="d_adi_valor${rowsd.length - 1}" value="${detalleadicional_valor}" ></td>
            <td><input size=5 type="text" name="d_adi_nombre" id="d_adi_nombre${rowsd.length - 1}" value="${detalleadicional_nombre}" ></td>`
            clickHandler()
            impuesto()
        }

    } else {
        console.log(detalle)
        document.getElementById('tablafact').insertRow(-1).innerHTML = `<td><input size=5  type="text" name="codigo_p" id="codigo_p${rowsd.length - 1}"value="${codigop}" readonly="readonly" >
        </td><td><input size=5 type="text" name="codigo_s" id="codigo_s${rowsd.length - 1}"value="${codigos}" readonly="readonly">
        </td><td><input type="text" name="detalle_p" id="detalle_p${rowsd.length - 1}" value="${detalle}" readonly="readonly">
        </td><td><input class="  w-75" type="number" name="cantidad_p" id="cantidad_p${rowsd.length - 1}"value="${1}"></td>
        <td><input size=5 type="text" name="preciouni_p" id="preciouni_p${rowsd.length - 1}"value="${pruni}" readonly="readonly" ></td>
        <td><input size=5 type="text" name="descuento_p" id="descuento_p${rowsd.length - 1}"value="0.00" readonly="readonly" ></td>
        <td><input size=5 type="text" name="precioto_p" id="precioto_p${rowsd.length - 1}"value="${pruni} "readonly="readonly" ></td>
        <td><input size=5 type="text" name="detalleim_cod" id="detalleim_cod${rowsd.length - 1}"value="${codigoimpues}" readonly="readonly" ></td>        
        <td><input size=5 type="text" name="detalleim_porc" id="detalleim_porc${rowsd.length - 1}"value="${codigoporsentaj}" readonly="readonly" ></td>
        <td><input size=5 type="text" name="d_trifa" id="d_trifa${rowsd.length - 1}"value="0.00" readonly="readonly" ></td>
        <td><input size=5 type="text" name="d_baseinpo" id="d_baseinpo${rowsd.length - 1}" value="${pruni}" readonly="readonly" ></td>
        <td><input size=5 type="text" name="d_valor" id="d_valor${rowsd.length - 1}" value="0.00" readonly="readonly" ></td>
        <td><input size=25 type="text" name="d_adi_valor" id="d_adi_valor${rowsd.length - 1}" value="${detalleadicional_valor}" ></td>
        <td><input size=5 type="text" name="d_adi_nombre" id="d_adi_nombre${rowsd.length - 1}" value="${detalleadicional_nombre}"></td>`
        clickHandler();
        impuesto();
    }


}
var selectElementporcentajetotal = document.getElementById('porcentaje_total_impuesto');

selectElementporcentajetotal.addEventListener('change',  function(){
    clickHandler()
});
document.querySelectorAll('#tablafact')
    .forEach(e => e.addEventListener("keyup", clickHandler));

document.querySelectorAll('#tablafact')
    .forEach(e => e.addEventListener("click", clickHandler));

function clickHandler() {
    var tabled = document.getElementById("tablafact");
    var rowsd = tabled.getElementsByTagName("tr");


    var total = 0;
    var totaldecuento=0;
    if (rowsd.length > 1) {
        var cont = cont + 1;

        for (i = 1; i < rowsd.length; i++) {

            var resulta = (parseFloat(document.getElementById('cantidad_p' + i).value) * parseFloat(document.getElementById('preciouni_p' + i).value))
            //console.log(resulta)
            document.getElementById('precioto_p' + i).value = resulta.toFixed(2)
            document.getElementById('d_baseinpo' + i).value = resulta.toFixed(2)
            if (document.getElementById('precioto_p' + i).value == "NaN") {
                document.getElementById('precioto_p' + i).value = 0.00
            }
            total += parseFloat(document.getElementById('precioto_p' + i).value)
            totaldecuento+= parseFloat(document.getElementById('descuento_p' + i).value)
            
        }
        console.log(total)
        
        document.getElementById('descuento_total').value = totaldecuento.toFixed(2)//
        document.getElementById('baseinponible_total').value = total.toFixed(2)//
        document.getElementById('total_sin_in').value = total.toFixed(2)
        document.getElementById('valorimponible_total').value =(parseFloat(document.getElementById('baseinponible_total').value)*porcentagetotal(document.getElementById('porcentaje_total_impuesto').value)).toFixed(2)
        document.getElementById('total_importe').value =(parseFloat(document.getElementById('total_sin_in').value)+parseFloat(document.getElementById('valorimponible_total').value)).toFixed(2)
    }
    impuesto()
}


function impuesto() {
    var tabled = document.getElementById("tablafact");
    var rowsd = tabled.getElementsByTagName("tr");
    var total = 0;
    if (rowsd.length > 1) {         // El 5% de 2 = 2*(5/100) = 2*0.05 = 0.1
        var cont = cont + 1;

        for (i = 1; i < rowsd.length; i++) {
            if(document.getElementById("detalleim_cod"+i).value==2){

            

            var resulta = (parseFloat(document.getElementById('d_baseinpo' + i).value) * parseFloat(porcentage(i)))
   
            document.getElementById('d_valor' + i).value = resulta.toFixed(2)
   
        }}


        // document.getElementById('valor_total').value = total.toFixed(2)
        // document.getElementById('total_sin_in').value = total.toFixed(2)
        // document.getElementById('subtotal_sin_in').value = total.toFixed(2)

    }

}

function porcentage (poci){
  var codigoporcentage= document.getElementById('detalleim_porc'+poci).value
//console.log(codigoporcentage)
if(codigoporcentage==0){
    document.getElementById('d_trifa'+poci).value="0.00"
   return porcentag=0.00
}
if(codigoporcentage==2){
    document.getElementById('d_trifa'+poci).value="12"
    return porcentag=0.12
 }
 if(codigoporcentage==3){
    document.getElementById('d_trifa'+poci).value="14"
    return porcentag=0.14
 }
 if(codigoporcentage==6){
    document.getElementById('d_trifa'+poci).value="0.00"
    return porcentag=0.00
 }
 if(codigoporcentage==7){
    document.getElementById('d_trifa'+poci).value="0.00"
    return porcentag=0.00
 }

}
function porcentagetotal (codigoporcentage){
  //console.log(codigoporcentage)
  if(codigoporcentage==0){
     document.getElementById('tarifaimponible_total').value="0.00"
     return porcentag=0.00
  }
  if(codigoporcentage==2){
      document.getElementById('tarifaimponible_total').value="12"
      return porcentag=0.12
   }
   if(codigoporcentage==3){
      document.getElementById('tarifaimponible_total').value="14"
      return porcentag=0.14
   }
   if(codigoporcentage==6){
      document.getElementById('tarifaimponible_total').value="0.00"
      return porcentag=0.00
   }
   if(codigoporcentage==7){
      document.getElementById('tarifaimponible_total').value="0.00"
      return porcentag=0.00
   }
  
  }

  var selectElement = document.getElementById('tiempo_pago');

  selectElement.addEventListener('change',  function(){
    
  const cambio=  document.getElementById('tiempo_pago').value
  if(cambio!=''){
    document.getElementById("plazo_pago").readOnly = false;
  }else{
    document.getElementById("plazo_pago").readOnly = true;
  }
    
  });