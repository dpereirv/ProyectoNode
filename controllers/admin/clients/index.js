
const express = require('express');
const router = express.Router();


const Clients = require('./../../../models/clients');
//const Users = require('./../../../models/users');
const Vehiculos = require('./../../../models/vehiculos');
const Ordenes = require('./../../../models/ordenes');
 
{/*
router.get('/', (req, res) => {
    console.log('User:', req.session.user)
    if (req.session.user) {
        return res.render('admin/index', { name: 'Administrator'});
    }
    return res.render('admin/login');
});

router.post('/login', (req, res) => {

    const { 
        email, 
        password
    } = req.body;

    console.log('Email:', email, 'Password:', password);

    Users.getUserByEmail(email, (error, user) => {
        if(error) {
            return  res.status(500).json({ code: 'UE' , message: 'Unknown Error!'})
        }
        console.log('User:', user)
        if (user.password == password) {

            req.session.user = user.toJSON();

            return req.session.save(function (err) {
                if (err) return  res.status(500).json({ code: 'UE' , message: 'Unknown Error!'})
                console.log('Success:', user)
                // return res.json({ code: 'OK', message: 'Login successful!'})
                return res.redirect('/');
            });
        }
        
        return res.status(421).json({ code: 'PF' , message: 'Email or password is incorrect!'})
    });
});


 */}

router.get('/clients', (req, res) => {
    return Clients.getClient((error, elems)=> {
        if (error) {
            return res.status(500).json({ code: 'UE', message: 'Unknown error'})
        }
        res.json(elems);
    });
});

router.post('/clients', function (req, res){
    const body = req.body;
    console.log('Data:', body);
    
    return Clients.createClient(body, (error, b) => {
        if(error){
            return  res.status(500).json({ code: 'UE', message: 'Unkwown error'})
        }
        res.json({ code: 'OK', message: 'Saved successfully!', data: b.toJSON()})
    });
});

{/*
router.put('/clients:id', function (req, res){
   // const { body: { data } } = res.body;
    console.log('Update:', req.body);
    const body = req.body;
    const { id } = req.body;
    clients = clients.map(b => b.id == id ? body : b);
    res.json({ code: 'OK', message: 'Saved successfully!'})
});
 */}

 console.log("entra 1");

router.put('/clients/:id', function (req, res) {
    const id = req.params.id;
    const updatedData = req.body; // Datos actualizados del cliente
    Clients.updateClient(id, updatedData, (error, updatedClient) => {
      if (error) {
        return res.status(500).json({ code: 'UE', message: 'Unknown error' });
      }
  
      if (!updatedClient) {
        return res.status(404).json({ code: 'NF', message: 'Client not found' });
      }
  
      res.json({ code: 'OK', message: 'Updated successfully!', data: updatedClient });
    });
 });
  


router.delete('/clients/:id', function (req, res){
    // const { body: { data } } = res.body;
    console.log('Deleting:', req.params);
    const { id } = req.params;
    
    Clients.deleteClient(id, (error, b) => {
        if (error) {
            return  res.status(500).json({ code: 'UE', message: 'Unkwown error'})
        }
        res.json({ code: 'OK', message: 'Deleted successfully!', data: b.toJSON()})
    });
});

router.get('/vehiculos', (req, res) => {
    return Vehiculos.getVehiculo((error, elems)=> {
        if (error) {
            return res.status(500).json({ code: 'UE', message: 'Unknown error'})
        }
        res.json(elems);
    });
});

router.post('/vehiculos', function (req, res){
    const body = req.body;
    console.log('Data:', body);
    
    return Vehiculos.createVehiculo(body, (error, b) => {
        if(error){
            return  res.status(500).json({ code: 'UE', message: 'Unkwown error'})
        }
        res.json({ code: 'OK', message: 'Saved successfully!', data: b.toJSON()})
    });
});


router.get('/ordenes', (req, res) => {
    return Ordenes.getOrden((error, elems)=> {
        if (error) {
            return res.status(500).json({ code: 'UE', message: 'Unknown error'})
        }
        res.json(elems);
    });
});

router.post('/ordenes', function (req, res){
    const body = req.body;
    console.log('Data:', body);
    
    return Ordenes.createOrden(body, (error, b) => {
        if(error){
            return  res.status(500).json({ code: 'UE', message: 'Unkwown error'})
        }
        res.json({ code: 'OK', message: 'Saved successfully!', data: b.toJSON()})
    });
});


router.put('/ordenes/:id', function (req, res) {
    const id = req.params.id;
    const updatedData = req.body; // Datos actualizados del cliente
    Ordenes.updateClient(id, updatedData, (error, updatedClient) => {
      if (error) {
        return res.status(500).json({ code: 'UE', message: 'Unknown error' });
      }
  
      if (!updatedClient) {
        return res.status(404).json({ code: 'NF', message: 'Client not found' });
      }
  
      res.json({ code: 'OK', message: 'Updated successfully!', data: updatedClient });
    });
 });

 

router.delete('/ordenes/:id', function (req, res){
    // const { body: { data } } = res.body;
    console.log('Deleting:', req.params);
    const { id } = req.params;
    
    Ordenes.deleteOrden(id, (error, b) => {
        if (error) {
            return  res.status(500).json({ code: 'UE', message: 'Unkwown error'})
        }
        res.json({ code: 'OK', message: 'Deleted successfully!', data: b.toJSON()})
    });
});

module.exports = router;
