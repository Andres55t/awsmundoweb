const Comentario = {};
db = require("../db");

Comentario.get = async () => {

    const comentarios = await db.query('SELECT * FROM comentarios');

    return comentarios;
}

Comentario.create = async (data) => {
    try {
        const insertar = await db.query('insert into comentarios set ?',[data]);
        if(insertar==='error'){
            console.log('ERROR');
        }else{
            return insertar;
        }
    } catch (e) {
        console.error(e)
    }
}
module.exports = Comentario;