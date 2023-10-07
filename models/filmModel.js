const pool = require('../config/dbconfig.js'); // Import koneksi basis data Anda (dbconfig.js)

const findAllFilm = async () => {
    try {
        const result = await pool.query('SELECT * FROM film ORDER BY film_id ASC');
        return result.rows;
    } catch (error) {
        throw error;
    }

};

const findFilmById = async (film_id) => {
    try {
        const result = await pool.query('SELECT * FROM film WHERE film_id = $1', [film_id]);
        return result.rows;
    } catch (error) {
        throw error;
    }
};

module.exports = {findAllFilm, findFilmById};
