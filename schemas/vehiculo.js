const mongoose = require('mongoose');

const vehiculos = mongoose.Schema({
    marca: String,
    modelo: String,
    placa:String,
    nivel_gaso: String,
    estado: String,
});

const Vehiculos = new mongoose.model('vehiculo', vehiculos);

module.exports = Vehiculos;