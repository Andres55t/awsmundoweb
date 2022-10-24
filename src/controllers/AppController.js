const AppController={};
const Usuario = require('../models/Usuario')

AppController.index=(req,res)=>{
    res.render('welcome');
}
AppController.comments=(req,res)=>{
    res.render('comments');
}
AppController.login=(req,res)=>{
    res.render('login');
}
AppController.factura=(req,res)=>{
    res.render('factura');
}
AppController.productos=(req,res)=>{
    res.render('productos');
}
AppController.productos=(req,res)=>{
    res.render('productos');
}
AppController.clvea=async (req,res)=>{
    const clva= await Usuario.getclveac()
    console.log(clva)
    res.render('clveac');
}

AppController.clveag=async (req, res) =>{
    try {
        await Usuario.clveac(req.body);
        res.redirect('/clvea')
    } catch (error) {
        console.log(error);
    }
}
module.exports=AppController;