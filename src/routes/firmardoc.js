
const express=require('express');
const routes= express.Router();
const FirmarController=require('../controllers/FirmarController')




routes.post('/store-firmardoc',FirmarController.store);



module.exports=routes;