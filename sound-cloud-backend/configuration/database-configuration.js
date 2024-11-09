const Package = require('../package.json');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://soundcloud:soundcloud@soundcloud.nr7l2ph.mongodb.net/?retryWrites=true&w=majority').then(data =>{
        console.log('Database is connected')
}).catch(error =>{
    console.log(error)
})
