const mongoose = require('mongoose');
const {Schema} = mongoose;


const SliderSchema = new Schema({
    img:{
        type: String,
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    url: {
        type: String,
        required: true,
    },
    filmType: {
        type: String,
        required: true 
    },
    genre: {
        type: String,
        required: true
    }
},{timestamps: true})


module.exports = mongoose.model('Slider', SliderSchema)