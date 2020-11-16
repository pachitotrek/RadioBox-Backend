require('./server/config/config');
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const router= require('./server/routes/routes');
const fileUpload = require('express-fileupload');
const mysql = require ('./server/controllers/mysql');



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS");
  next();
});

// mysql.BaseDatosController.EjecutarQuery();
// parse application/x-www-form-urlencoded




app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
 
// parse application/json

app.use(express.static(__dirname+'/public'));

// cargo las rutas
// app.use(require('./server/routes/routes'));
app.use('/api',router);



app.listen(process.env.PORT,()=>{

    console.log('Escuchando puerto',process.env.PORT);
});