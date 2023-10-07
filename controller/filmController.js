const filmModel = require('../models/filmModel.js'); // Import model (filmModel.js)

const findAllFilm = async (request, response) => {
    try {
        const films = await filmModel.findAllFilm();
        response.status(200).json(films);
    } catch (err) {
        response.status(500).json({ error: 'Internal Server Error' });
    }
};

const findFilmById = async (request, response) => {
    const film_id = parseInt(request.params.film_id);
    try {
        const film = await filmModel.findFilmById(film_id);
        response.status(200).json(film);
    } catch (err) {
        response.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {findAllFilm, findFilmById};

