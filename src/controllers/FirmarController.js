const Directorios = require('../models/Directorios')
const Firmardoc = require('../models/Firmardoc')
const moment = require('moment');
const { format } = require('../db');
const FirmarController = {};


FirmarController.index = async (req, res) => {
    const firmados = await Directorios.firmados(req.user);
    const firmas = await Directorios.firma(req.user);
    const generados = await Directorios.generados(req.user);
    res.render('firmar', { firmas: firmas, generados: generados, firmados: firmados });
}

FirmarController.store = async (req, res) => {

    const firmardoc = await Firmardoc.firma(req.user,req.body);
    // console.log()
    const firmas = await Directorios.firma(req.user);
    const firmados = await Directorios.firmados(req.user);
    const generados = await Directorios.generados(req.user);
    res.render('firmar', { firmas: firmas, generados: generados, firmados: firmados });
}





module.exports = FirmarController;