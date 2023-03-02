const {getSliders, addSlider, deleteSlider} = require('../services/slider.service');


const GetSliderAllController = async(req,res)=> {
    try {
        await getSliders(req,res);
    } catch (error) {
        res.json(error.message)
    }
};

const addSliderController = async(req,res)=>{
    try {
        await addSlider(req,res)
    } catch (error) {
        res.json(error.message)
    }
} 

const deleteSliderController = async(req,res)=>{
    try {
        await deleteSlider(req,res);
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {
    addSliderController,
    GetSliderAllController,
    deleteSliderController
}