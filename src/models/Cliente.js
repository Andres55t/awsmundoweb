const Cliente = {};
db = require("../db");

Cliente.get = async (iduser) => {

    const producto = await db.query('SELECT * FROM cliente INNER JOIN tidentificacion ON  tipoidentificacion_cliente=codigo_tidentificacion where id_usuario_cliente=?',iduser);

    return producto;
}

Cliente.buscador = async (iduser) => {

    const producto = await db.query('SELECT nombresrs_cliente,tipoidentificacion_cliente,identificacion_cliente,direccion_cliente,correo_cliente,telefono_cliente FROM cliente  where id_usuario_cliente=?',iduser);

    return producto;
}

Cliente.create = async (data) => {
    try {
        const insertar = await db.query('insert into cliente set ?',[data]);
        if(insertar==='error'){
            console.log('ERROR');
        }else{
            return insertar;
        }
    } catch (e) {
        console.error(e)
    }
}
module.exports = Cliente;