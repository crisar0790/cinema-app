import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import Filter from '../../components/Filter/Filter';
import { getMovies, searchMovies } from '../../redux/actions';
import ClipLoader from "react-spinners/ClipLoader";
import './Home.css';
import { FcFilmReel } from 'react-icons/fc';

function Home() {

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState('')
    const allMovies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    function handleMovieSearch(e) {
        setMovie(e.target.value);
        if (e.target.value !== '') {
            dispatch(searchMovies(e.target.value))
        } else {
            setMovie('');
            dispatch(getMovies());
        }
    }

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    useEffect(() => {
        if (allMovies.results?.length) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [allMovies.results, loading]);

    return (
        <div className='home__container'>
            <div className="searchAndFilter">
                <h1>Your favourite movies are here!</h1>
                <input
                    className='searchInput'
                    type="search"
                    placeholder="Search for a movie..."
                    value={movie}
                    onChange={handleMovieSearch}
                />
                <Filter movies={allMovies} />
            </div>
            <div className="cards__container">
                {
                    allMovies?.results?.length === 0 ?
                        <div className='not__found'>
                            <FcFilmReel size={50}/>
                            <p>We are sorry. Movie not found.</p>
                        </div> :
                        loading ?
                            <ClipLoader color={'#C00404'} loading={loading} size={100} /> :
                            allMovies.results?.map((m, i) =>
                                <Card key={i}
                                    image={m.poster_path !== null ?
                                        `https://image.tmdb.org/t/p/w342${m.poster_path}` :
                                        'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg'}
                                    name={m.original_title}
                                    rating={m.vote_average}
                                    id={m.id} />)
                }
            </div>
        </div>
    )
}

export default Home