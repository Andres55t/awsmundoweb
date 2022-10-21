const Usuario = {};
db = require("../db");
const bq=require('../helpers/bcrypt')

Usuario.get = async () => {

    const usuario = await db.query('SELECT * FROM users');

    return usuario;
}
Usuario.find = async (id_users) => {

    const usuario = await db.query('SELECT * FROM users where id_users=?',[id_users]);

    return usuario;
}

Usuario.findCuenta = async (cuenta) => {

    const usuario = await db.query('SELECT * FROM users where user_users=?',[cuenta]);

    return usuario;
}

Usuario.create = async (data) => {
    try {
        data.pass_users=bq.bcrypt(data.pass_users)
        const insertar = await db.query('insert into users set ?',[data]);
        if(insertar==='error'){
            console.log('ERROR');
        }else{
            return insertar;
        }
    } catch (e) {
        console.error(e)
    }
}
module.exports = Usuario
;