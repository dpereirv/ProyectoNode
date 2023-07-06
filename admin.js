const express = require('express');
const app = express();
const engine = require('ejs-locals');
const bodyParser = require('body-parser');
const session = require('express-session');

const path = require('path');
const mongoose = require('mongoose');

const db = require('./db');

//const AdminBookings = require('./controllers/admin/bookings')
const AdminClients = require('./controllers/admin/clients')
const AdminUsers = require('./controllers/admin/users')

app.use(bodyParser.json({ type: 'application/json' }))
// Use the session middleware
app.use(session({ 
    secret: 'Thisisthepassword', 
    resave: false,
    saveUninitialized: true
}))

app.engine('ejs', engine);  
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.use((req, res, next) => {

    const auth = {username: 'leonardo', password: '1234'}
  
     const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
     const [username, password] = Buffer.from(b64auth, 'base64').toString().split(':')
  
     // Verify login and password are set and correct
     if (username && password && username === auth.username && password === auth.password) {
      // Access granted...
       return next()
    }
  
     // Access denied...
     res.status(401).send('Authentication required.')
 })

 app.use('/users', AdminUsers)
//app.use('/', AdminBookings);
app.use('/', AdminClients);

app.use(express.static(path.join(__dirname, "build")));


const PORT = 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
