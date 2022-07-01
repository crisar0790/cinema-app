import axios from 'axios';

import {
    GET_MOVIES,
    SEARCH_MOVIES,
    FILTER_MOVIES,
    DETAILS_MOVIES
} from './actionTypes';

const API_KEY = process.env.REACT_APP_API_KEY;

export function getMovies() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
            return dispatch({
                type: GET_MOVIES,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export function searchMovies(movie) {
    return async function (dispatch) {
        try {
            if (movie) {
                const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${movie}`);
                return dispatch({
                    type: SEARCH_MOVIES,
                    payload: res.data
                });
            } else {
                getMovies();
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export function filterMovies (payload) {
    return {
        type: FILTER_MOVIES,
        payload
    }
}

export function detailsMovies (movie_id) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
            return dispatch({
                type: DETAILS_MOVIES,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export function clearMovieDetails () {
    return {
        type: DETAILS_MOVIES,
        payload: {details: undefined}
    }
}