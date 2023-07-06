const mongoose = require('mongoose');

const USER = 'gordoner83';
const PASSWORD = '7XQQ4fJlqS3dUzHt';
const DATABASE_NAME = 'practica3';


const URL = 'mongodb+srv://dpereirv:CdxikyUjRIQSTwOM@cluster0.apapsky.mongodb.net/practica3?retryWrites=true&w=majority';
             
mongoose.connect(URL)
.then(() => {
    console.log('Database connected!');
})
.catch((error)=> {
    console.log('Error connecting:', error);
});



// const bookings = mongoose.Schema({
//     first_name: String,
//     last_name: String,
//     address: String,
//     city: String
// });


// const Bookings = new mongoose.model('booking', bookings);

// const newbooking = new Bookings({
//     first_name: 'Leonardo',
//     last_name: 'Larrea',
//     address: 'Kennedy Norte',
//     city: 'Guayaquil'
// })
// .save()
// .then((b) => {
//     console.log('Booking:', b);
// })
// .catch((error) => {
//     console.log('Error:', error);
// })
// Bookings.find({ first_name: 'Eduardo'})
// .then((b) => {
//  console.log('Booking:', b)
// })
// .catch((error) => {
//  console.log('Error:', error);
// })




