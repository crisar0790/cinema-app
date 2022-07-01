export default function filter (actionFilter, filteredMovies) {
    let rating = Number(actionFilter);
    let movies = {};
    if (rating !== null) {
        let moviesFilter = filteredMovies.results.filter(m => m.vote_average <= rating);
        movies.results = moviesFilter;
        return movies;
    }
}