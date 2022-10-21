const Directorios = require('../models/Directorios')
const moment = require('moment');
const { format } = require('../db');
const SubirfirmaController = {};


SubirfirmaController.index = async (req, res) => {

   const firmas = await Directorios.firma(req.user);
console.log(firmas)
    res.render('subirfirma',{ firmas: firmas });
}




module.exports = SubirfirmaController;