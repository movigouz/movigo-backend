const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    title: String,
    description: String,
    language: String,
    country: String,
    video: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: "categories"
    },
    poster: String,
    year: Number,
    genres: String,
    likes: {
        type: Number,
        default: 0
    },
    trailer: String,
    age: Number,
    viewCount: {
        type: Number,
        default: 0,
    },
    duration: String,
}, {timestamps: true});

module.exports = mongoose.model('films', FilmSchema)