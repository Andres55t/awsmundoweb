const mysql = require('mysql')
const {database}=require('./keys')
const{promisify}=require('util')

const pool=mysql.createPool(database);

pool.getConnection((err,connection)=>{
    if (err){
        console.log(err.code)
    }
    if(connection){
        connection.release();
        console.log('Conectado a la Base de datos')
    }
})
pool.query=promisify(pool.query);
module.exports=pool;