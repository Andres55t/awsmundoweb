
const express=require('express');
const routes= express.Router();
const SRIservicioController=require('../controllers/SRIservivioController')




routes.post('/store-enviarsri',SRIservicioController.store);



module.exports=routes;