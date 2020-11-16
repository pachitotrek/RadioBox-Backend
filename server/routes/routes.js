const express = require('express');
const app = express();
const {ControllerUploadMedia} = require('../controllers/ServicioUpload');
const {ProductosController}=require('../controllers/productos');
const {ControllerAdmin} = require('../controllers/auth');
const {MultimediaController} = require('../controllers/contenido');
const {ImagenController}= require('../controllers/imagen');




const router = express.Router();
const { verificaToken }= require('../middlewares/auth');

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'});
const fileUpload=require('express-fileupload');

router.use( fileUpload({ useTempFiles: true }) );



//ADMIN
router.post('/adm',ControllerAdmin.add_usuario);
router.post('/admin',ControllerAdmin.login);


//Servicio de Upload
router.put('/upload/:tipo/:id',ControllerUploadMedia.UploadImage);
router.get('/img/:tipo/:img',ImagenController.getImagen);


//Streaming URL

router.put('/audio',MultimediaController.streamAudio);//editar audio
router.put('/video',MultimediaController.streamVideo);//edita video
router.get('/audio',MultimediaController.getAudio);//obtiene audio
router.get('/video',MultimediaController.getVideo);//obtiene video

//Programacion
router.post('/evento',MultimediaController.addEvento);
router.put('/evento',MultimediaController.actualizarEvento);
router.get('/eventos',MultimediaController.getEventos);
router.put('/devento',MultimediaController.eliminarEvento);
router.put('/nosotros',MultimediaController.nosotos);
router.get('/nosotros',MultimediaController.getNosotros);

//Publicidad
router.post('/publicidad',MultimediaController.crearPublicidad);
router.put('/publicidad',MultimediaController.deletePublicidad);
router.get('/publicidad',MultimediaController.getPublicidad);



// Redes sociales
router.post('/red',MultimediaController.crearRedSocial);
router.put('/red',MultimediaController.editarRed);
router.put('/deletered',MultimediaController.eliminarRed);
router.get('/red',MultimediaController.getRed);







module.exports = router;    