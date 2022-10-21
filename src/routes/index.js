const express=require('express');
const routes= express.Router();
const AppController=require('../controllers/AppController')
const ComentarioController=require('../controllers/ComentarioController')
const {nologged,logged}=require('../helpers/auth')
const ProductoController=require('../controllers/ProductoController')
const FacturaController=require('../controllers/FacturaController')
const ClienteController=require('../controllers/ClienteController')
const SucursalController=require('../controllers/SucursalController')
const SubirFirmaController=require('../controllers/SubirFirmaController')
const FirmarController=require('../controllers/FirmarController')
const SRIservicioController=require('../controllers/SRIservivioController')

routes.get('/',nologged,AppController.index);
routes.get('/comments',logged,ComentarioController.index);
routes.get('/login',nologged,AppController.login);
routes.get('/factura',logged,FacturaController.claveacceso);
routes.get('/productos',logged,ProductoController.index);
routes.get('/clientes',logged,ClienteController.index);
routes.post('/clientesb',logged,ClienteController.buscar);
routes.get('/sucursal',logged,SucursalController.index);
routes.get('/subirfirma',logged,SubirFirmaController.index);
routes.get('/firmardoc',logged,FirmarController.index);
routes.get('/sriservicio',logged,SRIservicioController.index);

module.exports=routes;