const Factura = require('../models/Factura')
const Producto=require('../models/Producto')
const Sucursal=require('../models/Sucursal')
const moment=require('moment');
const { format } = require('../db');
const FacturaController = {};


FacturaController.claveacceso= async(req,res)=>{
const claveacc=await Factura.claveacceso(req.user);
const producto=await Producto.get(req.user.id_users)
const sucursal=await Sucursal.get(req.user.id_users)
console.log(req.user.id_users);
res.render('factura', { claveacc: claveacc,producto:producto,sucursal: sucursal });//
}

FacturaController.index = async (req, res) => {
    
    // console.log(req.body);
    const facturacreate=await Factura.create(req.body);
    console.log(facturacreate.factura)
const claveacc=await Factura.claveacceso(req.user);
const producto=await Producto.get(req.user.id_users)
const sucursal=await Sucursal.get(req.user.id_users)

//console.log(facturacreate);
res.render('factura', { claveacc: claveacc,producto:producto,sucursal: sucursal,facturacreate:facturacreate })

  
}











module.exports = FacturaController;