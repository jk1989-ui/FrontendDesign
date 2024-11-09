// Initializing the Dependencies
const express = require('express');
const Router = express.Router();

// Accuring the Controllers
const { 
    addMusic,
    getAllMusic,
    getMusic,
    deleteAllMusic,
    deleteMusic,
    updateMusic
 } = require('../controllers/music-management-controller')
// Accuring the Controllers

// Accessing the Routes
Router.post('/addMusic',addMusic);
Router.get('/getAllMusic',getAllMusic);
Router.get('/getMusic/:Id',getMusic);
Router.delete('/deleteAllMusic',deleteAllMusic);
Router.delete('/deleteMusic/:Id',deleteMusic);
Router.put('/updateMusic/:Id',updateMusic);
// Accessing the Routes


module.exports = Router

