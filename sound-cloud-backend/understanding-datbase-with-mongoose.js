const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));


// Step1 : mongoose ke library ko require karo
const mongoose = require('mongoose');
// Step2 : mongoose ke through connect karo apanay database ko  jo ke haram mongdb cloud hoo ga
mongoose.connect('mongodb://127.0.0.1:27017/test');
// Step3 : Model banao (matlab  kis type ka data jae ga uss ka object banao) mongoose ke model say
const human = mongoose.Schema({
    name: { type: String, required: true},
    age: { type: Number, required: true},
    gender: { type: String, required: true}
}, {timestamp:ture})

mongoose.model('humanKeCollection',human)
// Step4 : abb tum model ko use karatay hua data insert karo
const Ali = new human({
    name: 'Ali',
    age: 20,
    gender: 'male'
})

//Step 5: abb tuk data base main CRUD karo
// Aur ajj hum apni pheli query parhengey 
// CRUD  .save() to create, .find() .findeById(), .findOne() To Read, .update(), .updateOne() to Update, .deleteOne(), .delete() to Delete

// //Create
// Ali.save();
// //Read
// Ali.find()
// Ali.findOne()
// //Update
// Ali.update()
// Ali.updateOne()
// //Delete
// Ali.delete()
// Ali.deleteOne()
