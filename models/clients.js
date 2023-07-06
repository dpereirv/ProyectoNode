const Clients = require('./../schemas/clients');

function getClient(cb) {
    Clients.find({})
    .then((elems) => {
        return cb(null, elems);
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    })
}


function createClient(b, cb) {
    new Clients(b)
    .save()
    .then((elem) => {
        return cb(null, elem);
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    });
}

function deleteClient(id, cb) {
    Clients.findOneAndRemove({ _id: id})
    .then((elem) => {
        return cb(null, elem);
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    })
}

function updateClient(id, updatedData, cb) {
    Clients.findByIdAndUpdate(id, updatedData, { new: true })
      .then((elem) => {
        return cb(null, elem);
      })
      .catch((error) => {
        console.log('Error:', error);
        return cb(error);
      });
  }


exports.getClient = getClient;
exports.createClient = createClient;
exports.deleteClient = deleteClient;
exports.updateClient = updateClient;