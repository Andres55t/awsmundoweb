const express=require('express');
const routes= express.Router();
const ProductoController=require('../controllers/ProductoController')


routes.post('/store-producto',ProductoController.store);


module.exports=routes;