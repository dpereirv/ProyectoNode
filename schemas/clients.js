const mongoose = require('mongoose');

const clients = mongoose.Schema({
    nombre: String,
    email: String,
    password:String,
    telefono: String,
    tipo_id: String,
    identificacion: String,
    rol: String
});

const Client = mongoose.model('Client', clients);

module.exports = Client;