const pool = require('../config/dbconfig.js'); // Import koneksi basis data Anda (dbconfig.js)

const findAllCategory = async () => {
    try {
        const result = await pool.query('SELECT * FROM category ORDER BY category_id ASC');
        return result.rows;
    } catch (error) {
        throw error;
    }
};

const findCategoryById = async (category_id) => {
    try {
        const result = await pool.query('SELECT * FROM category WHERE category_id = $1', [category_id]);
        return result.rows;
    } catch (error) {
        throw error;
    }
};

module.exports = {findAllCategory, findCategoryById};