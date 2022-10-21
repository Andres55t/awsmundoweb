const Producto = {};
db = require("../db");

Producto.get = async (idpro) => {

    const producto = await db.query('SELECT * FROM productos where id_users_productos=?',idpro);

    return producto;
}

Producto.create = async (data) => {
    try {
        const insertar = await db.query('insert into productos set ?',[data]);
        if(insertar==='error'){
            console.log('ERROR');
        }else{
            return insertar;
        }
    } catch (e) {
        console.error(e)
    }
}
module.exports = Producto;