const { CategoryCreate, getCategory, categoryDelete } = require('../services/category.service');


const CategoryCreateController = async (req, res) => {
    try {
        await CategoryCreate(req, res);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

const getCategoryController = async (req, res) => {
    try {
        await getCategory(req, res);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

const categoryDeleteController = async(req,res)=>{
    try {
        await categoryDelete(req,res);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    CategoryCreateController,
    getCategoryController,
    categoryDeleteController
}