const express=require('express');
const routes= express.Router();
const ClienteController=require('../controllers/ClienteController')


routes.post('/store-cliente',ClienteController.store);


module.exports=routes;