// Dependencies
const express = require('express');
const cors = require('cors');
// Dependencies

// Initializing the app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cors());
const PORT = 1234;
// Initializing the app

//Start Block Setting th Headers for your Application
app.all('*', (req, res, next) => {
    // This is how we protect the api
    res.header('Access-Control-Allow-Origin', '*');// So it make the header allow to the origin when cross platfrom try to exchange the data
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        //Mehtod is a property which help us to use the Methods by request. Browers send the options request before your Mthods request
    }
    next(); //if nothing of the response sent back so next() means other rou
});
//End Block Setting the Header for your Application

//Accessing the routes
const firstRoute = require('./routes/first-route');

app.use('/firstRoute',firstRoute)
//Accessing the routes

//Listening appliction on port
app.listen(PORT, () => {
    console.log(`You Application has Launched from the Port 🚀 🚀 ${PORT}`);
})
//Listening appliction on port



