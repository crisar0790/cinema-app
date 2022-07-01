import { DETAILS_MOVIES, FILTER_MOVIES, GET_MOVIES, SEARCH_MOVIES } from "../actions/actionTypes";
import filter from "./utils";

const initialState = {
    movies: [],
    filteredMovies: [],
    movieDetails: {},
    filterRating: null
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            if (state.filterRating !== null) {
                let moviesFiltered = filter(state.filterRating, action.payload)
                return {
                    ...state,
                    movies: moviesFiltered,
                    filteredMovies: action.payload
                }
            } else {
                return {
                    ...state,
                    movies: action.payload,
                    filteredMovies: action.payload
                }
            }
        case SEARCH_MOVIES:
            if (state.filterRating !== null) {
                let moviesFiltered = filter(state.filterRating, action.payload)
                return {
                    ...state,
                    movies: moviesFiltered,
                    filteredMovies: action.payload
                }
            } else {
                return {
                    ...state,
                    movies: action.payload,
                    filteredMovies: action.payload
                }
            }
        case FILTER_MOVIES:
            if (action.payload !== null) {
                let moviesFiltered = filter(action.payload, state.filteredMovies)
                return {
                    ...state,
                    movies: moviesFiltered,
                    filterRating: action.payload
                }
            } else {
                return {
                    ...state,
                    movies: state.filteredMovies,
                    filterRating: action.payload
                }
            }
        case DETAILS_MOVIES:
            return {
                ...state,
                movieDetails: action.payload
            }
        default:
            return {
                ...state
            };
    }
}