const Sucursal = {};
db = require("../db");

Sucursal.get = async (iduser) => {

    const sucursal = await db.query('SELECT * FROM sucursales where id_usuario_sucursales=?',iduser);

    return sucursal;
}

Sucursal.create = async (data) => {
    try {
        const insertar = await db.query('insert into sucursales set ?',[data]);
        if(insertar==='error'){
            console.log('ERROR');
        }else{
            return insertar;
        }
    } catch (e) {
        console.error(e)
    }
}
module.exports = Sucursal;