const musicModel = require('../models/music-management-model')

const addMusic = async (req, res) => {
    try {
        const { musicName, musicUrl, musicImage, musicDescription } = req.body;
        const musicToAdd = new musicModel({
            musicName,
            musicUrl,
            musicImage,
            musicDescription
        })
        const musicToSave = await musicToAdd.save();
        res.json({
            message: 'Music added successfully',
            data: true,
            result: musicToSave
        })
    } catch (error) {
        res.json({
            message: error.message,
            data: false,
            result: null
        })
    }
}

const getAllMusic =  async (req, res) => {
    try {
        const getAllMusic = await musicModel.find().lean();
        res.json({
            message:'Data founnd successfuly',
            data:true,
            result:getAllMusic
        })
    } catch (error) {
        res.json({
            message: error.message,
            data: false,
            result: null
        })
    }
}

const getMusic =  async (req, res) => {
    try {
        const Id = req.params.Id;
        const getMusic = await musicModel.findOne(
            // {} //Conditions
            // {} //Projectsuuionm
            // {} //Options
            {_id:Id},
            {musicName:1}
        ).lean();
        res.json({
            message:'Data founnd successfuly',
            data:true,
            result:getMusic
        })
    } catch (error) {
        res.json({
            message: error.message,
            data: false,
            result: null
        })
    }
}

const deleteAllMusic =   async (req, res) => {
    try {
            const deleteAll = await musicModel.deleteMany();
            res.json({
                message:'Deleted Successfuly',
                data:true,
                result:deleteAll
            })
    } catch (error) {
        res.json({
            message: error.message,
            data: false,
            result: null
        })
    }
}

const deleteMusic =   async (req, res) => {
    try {
            const Id =  req.params.Id;
            const deleteMusic = await musicModel.deleteOne(
                {_id:Id}
            );
            res.json({
                message:'Deleted One Successfuly',
                data:true,
                result:deleteMusic
            })
    } catch (error) {
        res.json({
            message: error.message,
            data: false,
            result: null
        })
    }
}

const updateMusic =   async (req, res) => {
    try {
            const Id = req.params.Id;
            const payLoad = req.body;
            const updateMusic = await musicModel.updateOne(
                {_id:Id},
                payLoad
            );
            res.json({
                message:'Music Updated',
                data:true,
                result:updateMusic
            })
    } catch (error) {
        res.json({
            message: error.message,
            data: false,
            result: null
        })
    }
}

module.exports = {
    addMusic,
    getAllMusic,
    getMusic,
    deleteAllMusic,
    deleteMusic,
    updateMusic
}