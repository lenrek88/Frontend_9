import { setFilms } from '../actions';

export const fetchFilm = (urlFind, OPTIONS) => {
    return async function (dispatch) {
        try {
            const response = await fetch(urlFind, OPTIONS);
            const movies = await response.json();
            dispatch(setFilms(movies.results));
        } catch (err) {
            console.error(err);
        }
    };
};
