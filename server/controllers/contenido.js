'use strict'
const Mysql = require('./mysql');
var mysql = require('mysql');
const fileUpload = require('./ServicioUpload');
const ServicioUpload = require('./ServicioUpload');

const MultimediaController = {

    streamVideo: function (req, res) {

        const body = req.body;
        let query = `UPDATE video SET url ='${body.url}' WHERE id ='${body.id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);

    },
    streamAudio: function (req, res) {

        const body = req.body;
        let query = `UPDATE audio SET url ='${body.url}' WHERE id ='${body.id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);

    },
    getAudio: function (req, res) {

        let query = `SELECT * FROM audio`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    getVideo: function (req, res) {

        let query = `SELECT * FROM video`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    addEvento: function (req, res) {

        const body = req.body;

        let hora = mysql.escape(body.hora);
        let titulo = mysql.escape(body.titulo);
        let descripcion = mysql.escape(body.descripcion);      

        let query = `INSERT INTO calendario(fecha,hora,titulo,descripcion) VALUES ('${body.fecha}', ${hora},${titulo},${descripcion})`;

        Mysql.BaseDatosController.EjecutarQuery(query,res,false);
    },
    actualizarEvento: function (req, res) {

        const body = req.body;
        let hora = mysql.escape(body.hora);
        let titulo = mysql.escape(body.titulo);
        let descripcion = mysql.escape(body.descripcion);     

        let query=  `UPDATE calendario SET fecha='${body.fecha}',hora=${hora},titulo=${titulo},descripcion=${descripcion} WHERE id ='${body.id}'`;

        Mysql.BaseDatosController.EjecutarQuery(query,res,false);
    },
    eliminarEvento: function (req, res) {
        const body = req.body;         
        let id = body.id;
        let query= `DELETE FROM calendario WHERE id ='${id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query,res,false);
    },
    getEventos: function (req, res) {

        let query = `SELECT * FROM calendario`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    nosotos:function (req,res) {

        const body = req.body;
        let texto = mysql.escape(body.texto);
       
        let titulo = mysql.escape(body.titulo);       

        let query=  `UPDATE nosotros SET titulo=${titulo},texto=${texto} WHERE id ='${body.id}'`;

        Mysql.BaseDatosController.EjecutarQuery(query,res,false);
  
    },
    getNosotros:function(req,res){
        let query = `SELECT * FROM nosotros`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);    
    },
    crearPublicidad:function(req,res){

        const body= req.body;

        let query =`INSERT INTO publicidad (titulo) VALUES ('${body.titulo}')`;

        Mysql.BaseDatosController.EjecutarQuery(query,res,false);
    },
    deletePublicidad:function(req,res){

        const body = req.body;         
        let id = body.id;
        let query= `DELETE FROM publicidad WHERE id ='${id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query,res,false);
    },
    getPublicidad:function(req,res){
        let query = `SELECT * FROM publicidad`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);         
    },
    crearRedSocial:function(req,res){
    const body = req.body;
    let query = `INSERT INTO redsocial(nickname, url, tipo) VALUES ('${body.nickname}','${body.url}','${body.tipo}')`;
    Mysql.BaseDatosController.EjecutarQuery(query,res,false);
    },

    editarRed:function(req,res){
    const body = req.body;
    let query = `UPDATE redsocial SET nickname='${body.nickname}',url='${body.url}',tipo='${body.tipo}' WHERE id = '${body.id}'`;
    Mysql.BaseDatosController.EjecutarQuery(query,res,false);
    },

    eliminarRed:function(req,res){
    const body = req.body;
    let id = body.id;
    let query= `DELETE FROM redsocial WHERE id ='${id}'`;
    Mysql.BaseDatosController.EjecutarQuery(query,res,false);
    },
    getRed:function(req,res){
        let query = `SELECT * FROM redsocial`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);         
    }






}

module.exports.MultimediaController = MultimediaController;
