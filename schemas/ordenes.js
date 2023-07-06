const mongoose = require('mongoose');

const ordenes = mongoose.Schema({
    id_client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    id_vehiculo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehiculo'
    },
    fecha_entrega:String,
    servicio:[String],
    motivo:String
});

const Ordenes = mongoose.model('orden', ordenes);

module.exports = Ordenes;