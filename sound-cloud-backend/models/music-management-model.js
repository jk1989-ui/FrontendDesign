const mongoose = require('mongoose');

const musicModel = mongoose.Schema({
    musicName: {type:String,required:true},
    musicUrl: {type:String,required:true},
    musicImage: {type:String},
    musicDescription: {type:String,required:true},
})

module.exports = mongoose.model('MusicCollection', musicModel);