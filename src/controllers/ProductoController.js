const Producto = require('../models/Producto')
const moment=require('moment');
const { format } = require('../db');
const ProductoController = {};

ProductoController.index = async (req, res) => {

    const producto = await Producto.get(req.user.id_users);
    
    res.render('productos', { producto: producto });
}


ProductoController.store = async (req, res) => {
    const data = req.body;
    data.id_users_productos=req.user.id_users;
    try {
        await Producto.create(data);
        res.redirect('/productos')
    } catch (error) {
        console.log(error);
    }
}

module.exports = ProductoController;