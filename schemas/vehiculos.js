const mongoose = require('mongoose');

const vehiculos = mongoose.Schema({
    marca: String,
    modelo: String,
    placa:String,
    nivel_gaso: String,
    estado: String,
});

const Vehiculo =  mongoose.model('Vehiculo', vehiculos);

module.exports = Vehiculo;