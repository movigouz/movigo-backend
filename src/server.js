const express = require('express');
const connectDB = require('./core/connectDB');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const FilmsRouter = require('./routes/films.router');
const categoryRouter = require('./routes/category.router');
const SliderRouter = require('./routes/slider.router')
const { default: mongoose } = require('mongoose');
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors('*'));
app.use(morgan('dev'));
mongoose.set('strictQuery', true)
require('dotenv').config({path: 'src/config/config.env'});
connectDB();


//router

app.use('/api/films', FilmsRouter);
app.use('/api/category', categoryRouter);
app.use('/api/slider', SliderRouter)

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(PORT, 'Server WORKING')
})