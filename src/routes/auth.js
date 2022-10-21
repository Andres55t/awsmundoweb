const express=require('express');
const routes= express.Router();
const AuthController=require('../controllers/AuthController')
const {nologged,logged}=require('../helpers/auth')


routes.post('/auth',AuthController.auth);

routes.get('/logout',logged,AuthController.logout);


module.exports=routes;