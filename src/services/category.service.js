const Category = require('../models/Category.model.js');


const CategoryCreate = async(req,res) => {
    const category  = await Category.create({
        name: req.body.name
    })

    res.status(201).json({
        success: true,
        data: category
    });
}

const getCategory = async(req,res)=> {
    const categories = await Category.find();
    res.status(200).json({
        success: true,
        data: categories
    })
}


const categoryDelete = async(req,res) => {
    const category = await Category.findByIdAndDelete({_id: req.params.id})
    res.status(200).json({
        success: true,
        data: category
    })
}

module.exports = {
    CategoryCreate, 
    getCategory,
    categoryDelete
};