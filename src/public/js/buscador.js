buscarclient.oninput = function () {

    if (buscarclient.value.length > 1) {

        buscador(buscarclient.value);
    }

};

function buscador(buscar) {

    var raw = JSON.stringify({
        "instancia": "5"
    });

    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: raw,
        redirect: 'follow'
    };

    fetch("/clientesb", requestOptions)
        .then(response => response.text())
        .then(result => {
            var cont = 0;
            let ubicaci = [];
            const as = JSON.parse(result.toString())
            var ul = document.getElementById("listabusq");
            document.getElementById("listabusq").innerHTML = '';
            for (var i = 0; i < as.length; i++) {
                if (as[i].nombresrs_cliente.indexOf(buscar) !== -1 || as[i].identificacion_cliente.indexOf(buscar) !== -1) {
                    ul.innerHTML += `<label for="listabusq" id=opcion${cont} >${as[i].identificacion_cliente}-${as[i].nombresrs_cliente}</label><br>`
                    ubicaci[cont] = i;
                    cont++;
                }
                if (cont == 3) {
                    breack;
                }
            }


            var miCheckbox = document.getElementById('opcion0');
            var miCheckbox1 = document.getElementById('opcion1');
            var miCheckbox2 = document.getElementById('opcion2');


            if (miCheckbox !== null) {
                var valorc = document.getElementById('opcion0').innerHTML
                miCheckbox.addEventListener('click', function () {
                    // var divisiones = valorc.split("-", 1);

                    incetarbusqueda(as[ubicaci[0]].nombresrs_cliente, as[ubicaci[0]].tipoidentificacion_cliente, as[ubicaci[0]].identificacion_cliente, as[ubicaci[0]].direccion_cliente, as[ubicaci[0]].correo_cliente, as[ubicaci[0]].telefono_cliente);
                    // msg.innerText = 'selecionado ' + ubicaci;
                    document.getElementById("listabusq").innerHTML = '';
                });
            }

            if (miCheckbox1 !== null) {
                var valorc1 = document.getElementById('opcion1').innerHTML
                miCheckbox1.addEventListener('click', function () {

                    incetarbusqueda(as[ubicaci[1]].nombresrs_cliente, as[ubicaci[1]].tipoidentificacion_cliente, as[ubicaci[1]].identificacion_cliente, as[ubicaci[1]].direccion_cliente, as[ubicaci[1]].correo_cliente, as[ubicaci[1]].telefono_cliente)
                    // msg.innerText = 'selecionado ' + valorc1 + as[1].nombresrs_cliente;
                    document.getElementById("listabusq").innerHTML = '';
                });
            }
            if (miCheckbox2 !== null) {
                var valorc2 = document.getElementById('opcion2').innerHTML
                miCheckbox2.addEventListener('click', function () {
                    incetarbusqueda(as[1].nombresrs_cliente, as[ubicaci[3]].tipoidentificacion_cliente, as[ubicaci[3]].identificacion_cliente, as[ubicaci[3]].direccion_cliente, as[ubicaci[3]].correo_cliente, as[ubicaci[3]].telefono_cliente)
                    //msg.innerText = 'selecionado ' + valorc2;
                    document.getElementById("listabusq").innerHTML = '';
                });
            }



            var msg = document.getElementById('msg');
            function incetarbusqueda(nombresrs_c, tipoidentificacion_c, identificacion_c, direccion_c, correo_c, telefono_c) {
                document.getElementById('nombresrs_cliente').value = nombresrs_c;
                document.getElementById('tipoidentificacion_cliente').value = tipoidentificacion_c;
                document.getElementById('identificacion_cliente').value = identificacion_c;
                document.getElementById('direccion_cliente').value = direccion_c;
                document.getElementById('correo_cliente').value = correo_c;
                document.getElementById('telefono_cliente').value = telefono_c;

            }




        })
        .catch(error => console.log('error', error));
}


