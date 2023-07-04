const mongoose = require('mongoose');

const clients = mongoose.Schema({
    nombre: String,
    email: String,
    password:String,
    telefono: String,
    tipo_id: String,
    identificacion: String
});

const Clients = new mongoose.model('client', clients);

module.exports = Clients;