const Cliente = require('../models/Cliente')
const { format } = require('../db');
const ClienteController = {};

ClienteController.index = async (req, res) => {

   const cliente = await Cliente.get(req.user.id_users);
    
    res.render('cliente',{ cliente: cliente }); 
}

ClienteController.buscar = async (req, res) => {

    const cliente = await Cliente.buscador(req.user.id_users);
    console.log(cliente)
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(cliente));

 }


ClienteController.store = async (req, res) => {
    const data = req.body;
    data.id_usuario_cliente=req.user.id_users;
    console.log(data)
    try {
        await Cliente.create(data);
        res.redirect('/clientes')
    } catch (error) {
        console.log(error);
    }
}

module.exports = ClienteController;