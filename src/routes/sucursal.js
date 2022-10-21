const express=require('express');
const routes= express.Router();
const SucursalController=require('../controllers/SucursalController')


routes.post('/store-sucursal',SucursalController.store);


module.exports=routes;