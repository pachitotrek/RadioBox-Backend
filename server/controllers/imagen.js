'use strict'

const path = require('path');
const fs = require('fs');

const ImagenController ={


    getImagen:function(req,res){
        
        var tipo = req.params.tipo;       
        var img = req.params.img;

        var pathImagen = path.resolve(__dirname,`../../uploads/${tipo}/${img}`);

        if(fs.existsSync(pathImagen)){
            
            res.sendFile(pathImagen);
        }else{
            var pathNoImage= path.resolve(__dirname,'../../assets/noimage.jpg');
            res.sendFile(pathNoImage);

        }


    }



}

module.exports.ImagenController=ImagenController;