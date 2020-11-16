'use strict'
const Mysql = require('./mysql');
const fileUpload = require('./ServicioUpload');


const cartaController = {

    crearcategoria: function (req, res) {
        const body = req.body;
        let query = `INSERT INTO categorias (categoria) VALUES ('${body.categoria}')`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    editarCategoria: function (req, res) {
        var body = req.body;
        let query = `UPDATE categorias SET categoria='${body.categoria}' WHERE id='${body.id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    eliminarCategoria: function (req, res) {
        const body = req.body;
        let id = body.id;
        let query = `DELETE FROM categorias WHERE id ='${id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    GetCategorias: function (req, res) {

        let query = `SELECT * FROM categorias`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    getCategoria: function (req, res) {

        const id = req.params.id;
        let query = `SELECT * FROM categorias WHERE id = ${id}`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },


    addVideo: function (req, res) {
        const body = req.body;
        let query = `INSERT INTO productos (name, descripcion, precio,url, categoria, time, disponible,tipo) VALUES ('${body.name}','${body.descripcion}','${body.precio}','${body.url}','${body.categoria}','${body.time}','${body.disponible}','${body.tipo}')`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    editarVideo: function (req, res) {
        const body = req.body;
        let query = `UPDATE productos SET name='${body.name}',descripcion='${body.descripcion}',precio='${body.precio}',url='${body.url}',categoria='${body.categoria}',
        time='${body.time}',disponible='${body.disponible}' WHERE id='${body.id}' `;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    eliminarVideo: function (req, res) {
        const id = req.params.id;
        let query = `DELETE FROM productos WHERE 'id'='${id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    getVideos: function (req, res) {
        let query = `SELECT * FROM productos WHERE tipo = 1`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    getVideo: function (req, res) {
        const id = req.params.id;
        let query = `SELECT * FROM productos WHERE categoria = ${id} AND tipo = 1`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    video: function (req, res) {
        let id = req.params.id;
        let query = `SELECT * FROM productos WHERE id = '${id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },




}

module.exports.cartaController = cartaController;