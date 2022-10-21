const express=require('express');
const routes= express.Router();
const AuthController=require('../controllers/AuthController')
const {nologged,logged}=require('../helpers/auth')


routes.get('/admin',logged,AuthController.admin);


module.exports=routes;