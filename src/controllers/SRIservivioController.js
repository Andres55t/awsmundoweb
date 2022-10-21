const Directorios = require('../models/Directorios')
const SRIservivio = require('../models/SRIservicio')
const moment = require('moment');
const { format } = require('../db');
const SRIservivioController = {};


SRIservivioController.index = async (req, res) => {
    const firmados = await Directorios.firmados(req.user);
    const firmas = await Directorios.firma(req.user);
    const generados = await Directorios.generados(req.user);
    res.render('sriservicio', { firmas: firmas, generados: generados, firmados: firmados });
}

SRIservivioController.store = async (req, res) => {

    const sriservicio = await SRIservivio.enviarsri(req.user,req.body);
    // console.log()

    const firmados = await Directorios.firmados(req.user);
    res.render('sriservicio', { firmados: firmados });
}

module.exports = SRIservivioController;