const { 
    allGetFilms,getByCategoryFilms, filmsLikeAdd, addFilms, editFilm, deleteFilms, GetByIdFilms, getByGenreFilms, getByCountryFilms, allMovieAdminPage, 
} = require('../services/films.service');


const allMovieAdminPageController = async(req,res)=>{
    try {
        await allMovieAdminPage(req,res);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}
const allGetFilmsController = async(req,res)=>{
    try {
        await allGetFilms(req,res);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

const getByIdFilmsController = async(req,res)=>{
    try {
        await GetByIdFilms(req,res)
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}


const addFilmsController = async(req,res) => {
    try {
        await addFilms(req,res)
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}



const editFilmsController = async(req,res)=>{
    try {
        await editFilm(req,res);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

const deleteFilmsController = async(req,res)=>{
    try {
        await deleteFilms(req,res);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

const getByCategoryFilmsController = async(req,res)=>{
    try {
        await getByCategoryFilms(req,res)
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

const GetByGenreFilmsController = async(req,res)=> {
    try{
        await getByGenreFilms(req,res);
    }catch(error){
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

const getByCountryFilmsController = async(req,res)=>{
    try {
        await getByCountryFilms(req,res);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

const addLikeFilmsController = async(req,res)=>{
    try {
        await filmsLikeAdd(req,res);
    } catch (error) {
        res.status(500).json({
            success:false,
            error: error.message
        })
    }
}

module.exports = {
    allGetFilmsController,
    addFilmsController,
    editFilmsController,
    deleteFilmsController,
    getByIdFilmsController,
    getByCategoryFilmsController,
    GetByGenreFilmsController,
    getByCountryFilmsController,
    addLikeFilmsController,
    allMovieAdminPageController
}