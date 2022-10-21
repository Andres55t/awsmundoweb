const express=require('express');
const routes= express.Router();



const FacturaController=require('../controllers/FacturaController')

routes.post('/generarfactura',FacturaController.index);

module.exports=routes;