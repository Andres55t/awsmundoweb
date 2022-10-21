const Sucursal = require('../models/Sucursal')
const moment=require('moment');
const { format } = require('../db');
const SucursalController = {};

SucursalController.index = async (req, res) => {

    const sucursal = await Sucursal.get(req.user.id_users);
    
    res.render('sucursales', { sucursal: sucursal });
}


SucursalController.store = async (req, res) => {
    const data = req.body;
    data.id_usuario_sucursales=req.user.id_users;
    try {
        await Sucursal.create(data);
        res.redirect('/sucursal')
    } catch (error) {
        console.log(error);
    }
}

module.exports = SucursalController;