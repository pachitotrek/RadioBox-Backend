//========================
//PUERTO
//========================

process.env.PORT = process.env.PORT || 3000;

//========================
//entorno
//========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; 

//========================
//vencimiento del token
//========================
//60 segundos
//60 minutos
//24 horas
//30dias

process.env.CADUCIDAD_TOKEN=process.env.CADUCIDAD_TOKEN || 60*60*24*30;

//========================
//seed de autenticacion
//========================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//========================
//Credenciales Correo
//========================
