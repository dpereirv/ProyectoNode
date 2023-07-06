const Vehiculos = require('./../schemas/vehiculos');

function getVehiculo(cb) {
    Vehiculos.find({})
    .then((elems) => {
        return cb(null, elems);
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    })
}


function createVehiculo(b, cb) {
    new Vehiculos(b)
    .save()
    .then((elem) => {
        return cb(null, elem);
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    });
}



exports.getVehiculo = getVehiculo;
exports.createVehiculo = createVehiculo;
