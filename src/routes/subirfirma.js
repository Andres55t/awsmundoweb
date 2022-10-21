const express=require('express');
const routes= express.Router();
const SucursalController=require('../controllers/SucursalController')
const aws = require('aws-sdk')
const bodyParser = require('body-parser')
const multer = require('multer')
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: 'lTDX9ZU/SBSiJC559VnaVaDOOe3lJranFGw5qxg/',
    accessKeyId: 'AKIA5P4ATAWW3JC4RT7O'
});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'aws-mundoartificial',
        key: function (req, file, cb) {
           
            cb(null,req.user.ruc+"/FIRMA/"+ file.originalname); //use Date.now() for unique file keys
        }
    })
});


routes.post('/upload', upload.single("upl"), function (req, res, next) {
    res.send({
        message: "Uploaded!"
        // ,
        // urls: req.files.map(function(file) {
        //     return {url: file.location, name: file.key, type: file.mimetype, size: file.size};
        // })
    });
});


module.exports=routes;