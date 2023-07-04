const mongoose = require('mongoose');

const ordenes = mongoose.Schema({
    id_client: String,
    id_vehiculo: String,
    fecha_entrega:String,
    servicio: String
});

const Ordenes = new mongoose.model('orden', ordenes);

module.exports = Ordenes;