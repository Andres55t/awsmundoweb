const Comentario = require('../models/Comentario')
const moment=require('moment');
const { format } = require('../db');
const ComentarioController = {};


ComentarioController.index = async (req, res) => {
    const comentarios = await Comentario.get();
    res.render('comments', { comentarios: comentarios });
}
ComentarioController.store = async (req, res) => {
    const data = req.body;
    data.fecha=moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(data);
    try {
        await Comentario.create(data);
        res.redirect('/comments')
    } catch (error) {
        console.log(error);
    }
}

module.exports = ComentarioController;