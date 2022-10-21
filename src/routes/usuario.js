const express=require('express');
const routes= express.Router();
const UsuarioController=require('../controllers/UsuarioController')


routes.get('/create-usuario',UsuarioController.create);
routes.post('/store-usuario',UsuarioController.store);


module.exports=routes;