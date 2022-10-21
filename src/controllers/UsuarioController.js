const Usuario = require('../models/Usuario')
const moment=require('moment');
const { format } = require('../db');
const UsuarioController = {};




UsuarioController.create = async (req, res) => {

   res.render('usuario/usuario-create');
}

UsuarioController.store = async (req, res) => {
    const data = req.body;
    //data.fecha=moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(data);
    try {
        await Usuario.create(data);
        res.redirect('/create-usuario')
    } catch (error) {
        console.log(error);
    }
}

module.exports = UsuarioController;