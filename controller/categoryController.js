const categoryModel = require('../models/categoryModel.js'); // Import model (categoryModel.js)


const findAllCategory = async (request, response) => {
    try {
        const categories = await categoryModel.findAllCategory();
        response.status(200).json(categories);
    } catch (err) {
        response.status(500).json({ error: 'Internal Server Error' });
    }
};

const findFilmByCategoryId = async (request, response) => {
    const category_id = parseInt(request.params.category_id);
    try {
        const category = await categoryModel.findFilmByCategoryId(category_id);
        response.status(200).json(category);
    } catch (err) {
        response.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {findAllCategory, findFilmByCategoryId};