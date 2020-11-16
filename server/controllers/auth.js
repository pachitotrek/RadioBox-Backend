'use strict'


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Mysql= require('./mysql');
var mysql = require('mysql');




// const path = require('path');
// const upload = require('./ServicioUpload');
// const email= require('./email');
// const generator = require('generate-password');





const ControllerAdmin = {
   
    add_usuario: function (req, res) {

        let body = req.body;

         let pass=  bcrypt.hashSync(body.pass,10);

         let query =`INSERT INTO admin (email, pass) VALUES ('${body.email}','${pass}')`;
         
         Mysql.BaseDatosController.EjecutarQuery(query,res,true);  

    },
    
    login: function (req, res) {
        let body = req.body; 

        let email =  mysql.escape(body.email);

        let query =`SELECT email, pass FROM admin WHERE email =${email}`;      
        var cnn = mysql.createConnection({
            host     : 'sv50.byethost50.org',    
            user     : 'homedeko_box',
            password : 'jhxdp6a_vqfD',
            database : 'homedeko_radiobox'
        });      
            cnn.query(query, function (error, results, fields) {
                if (error) throw error;
               if(results[0]==null){

                return res.status(400).json({
                    ok:false,
                    message:'Credenciales incorrectas'
                });


               }else{

                let email = results[0].email;                                                
                if (!bcrypt.compareSync(body.pass,results[0].pass)) {
                    return res.status(400).json({
                        ok: false,
                        err: {
                            message: 'Error Contraseña incorrecta'
                        }
                    });
                }
                
                let token = jwt.sign({
                    usuario:email
                }               
                , process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

                return res.status(200).json({
                    ok:true,
                    usuario:email,
                    token
                });   
                
               }          
                        
            });
    
            cnn.end((err)=>{
                if(err){
                    console.log(err);
                }        
            });   
    },    
    // profileUserImage: function (id, res, fileName, key) {

    //     ModelUsuario.findById(id, (err, usuarioDB) => {
    //         if (err) {
    //             upload.ControllerUploadMedia.borraArchivo(fileName,key);
    //             return res.status(500).send({ message: ' La Imagen no se ha subido' });
    //         }

    //         if (!usuarioDB) {
    //             upload.ControllerUploadMedia.borraArchivo(fileName,key);
    //             return res.status(404).send({ message: 'El proyecto no existe o la imagen no se ha subido' });
    //         }
           
    //         upload.ControllerUploadMedia.borraArchivo(usuarioDB.img,key);

    //         ModelUsuario.updateOne({ _id: id }, {
    //             $set: {
    //                 img: fileName
    //             }
    //         }, (err, user) => {

    //             return res.status(200).json({
    //                 ok: true,
    //                 message: 'Archivo cargado',
    //                 files: user
    //             });
    //         })


    //     });

    // },
    // password_recovery:function(req,res){
    //     const body = req.body;

    //     ModelUsuario.findOne({email:body.email},(err,usuarioDB)=>{
    //         if(err){
    //             return res.status(500).json({
    //                 ok: false,
    //                 message: 'Error al Buscar',                    
    //             });
    //         }
    //         if(!usuarioDB){
    //             return res.status(401).json({
    //                 ok: true,
    //                 message: 'No se encuentra el Usuario',                    
    //             })
    //         }
    //         const emailrecovery= usuarioDB.email;

    //         const newpassword = generator.generate({
    //             length: 10,
    //             numbers: true
    //         });          

    //         const newEncryptPassword = bcrypt.hashSync(newpassword, 10);


    //         ModelUsuario.updateOne({ _id: usuarioDB._id }, {
    //             $set: {
    //                 password: newEncryptPassword
    //             }
    //         }, (err, user) => {

    //             email.EmailController.sendemail(emailrecovery,res,newpassword);

    //         })
            



           

            

          
    //     });



    // },
    // password_change:function(req,res){
    //     const body = req.body;

    //     const newEncryptPassword = bcrypt.hashSync(body.password, 10);

    //     ModelUsuario.updateOne({ email:body.email }, {
    //         $set: {
    //             password: newEncryptPassword
    //         }
    //     }, (err, user) => {

    //         if(err){
    //             res.status(500).json({
    //                 ok:false,
    //                 message:'Error al Actualizar'
    //             });
    //         }
    //         if(!user){
    //             res.status(401).json({
    //                 ok:false,
    //                 message:'No se encuentra el usuario'
    //             });
    //         }

    //         res.status(200).json({
    //             ok:true,
    //             message:'Contraseña Actualizada'
    //         });
    //     });

    // }


    

    


}



module.exports.ControllerAdmin  = ControllerAdmin;
