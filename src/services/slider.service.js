const Slider = require('../models/Slider.model');


const addSlider = async(req,res)=>{
    try {
        const data = {
            img: req.body.img,
            title: req.body.title,
            url: req.body.url,
            filmType: req.body.filmType,
            genre: req.body.genre
        }
        await Slider.create(data);

        res.status(201).json({
            success: true,
            data: data
        })
    } catch (error) {
        res.json(error.message)
    }
}


const getSliders = async(req,res)=>{
    try {
        const Sliders = await Slider.find().sort({createdAt: -1});
        res.status(200).json({
            success: true,
            data: Sliders
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}


const  deleteSlider = async(req,res)=>{
    try {
        const slider = await Slider.findByIdAndDelete({_id: req.params.sliderId});
        await res.status(200).json({
            success: true,
            data: `${slider._id} - Delete`,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}


module.exports = {
    getSliders,
    addSlider,
    deleteSlider
}