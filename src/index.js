const express = require( 'express')
const morgan = require('morgan')
const ehbs=require('express-handlebars')
const path = require('node:path');
const{urlencoded,json}=require('express');
const session =require('express-session');
const MySQLSession=require('express-mysql-session')
const {database}=require('./keys')
const passport=require('passport')
const app = express()
const dotenv = require( 'dotenv')
require('./helpers/passport');

app.use(morgan('dev'));
app.use(urlencoded({extended:true}));
app.use(json());

app.use(session({
    secret: 'factura-session',
    resave: false,
    saveUninitialized: true,
    store: new MySQLSession(database)
}))
app.use(passport.initialize());
app.use(passport.session());
//motor plantillas
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',ehbs.engine({
    defaultLayout:'app',
    extname:'.hbs',
    helpers:require('../src/helpers/handlebars')
}));
app.set('view engine','.hbs')
//variables globas
app.use((req,res,next)=>{
    res.locals.usuario=req.user;
    next();
})
//variables de entorno
dotenv.config({path: './env/.env'})
//rutas
app.use(require('./routes'))
app.use(require('./routes/comentario'))
app.use(require('./routes/usuario'))
app.use(require('./routes/auth'))
app.use(require('./routes/admin'))
app.use(require('./routes/productos'))
app.use(require('./routes/cliente'))
app.use(require('./routes/factura'))
app.use(require('./routes/sucursal'))
app.use(require('./routes/subirfirma'))
app.use(require('./routes/firmardoc'))
app.use(require('./routes/sriservicio'))
//rutaspublicas
app.use(express.static(path.join(__dirname,'public')))


app.listen(4000,()=>{
    console.log('server up in http://localhost:4000');
});