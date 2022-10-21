const express=require('express');
const routes= express.Router();
const ComentarioController=require('../controllers/ComentarioController')


routes.post('/store-comentario',ComentarioController.store);


module.exports=routes;