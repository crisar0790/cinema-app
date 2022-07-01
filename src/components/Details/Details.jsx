import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import './Details.css';

function Details({ show }) {

  const [loading, setLoading] = useState(true);
  const movieDetail = useSelector(state => state.movieDetails);

  useEffect(() => {
    if (movieDetail.details === undefined) {
      setLoading(true);
    }
    if (Object.keys(movieDetail)?.length) {
      setLoading(false);
    }
    else {
      setLoading(true);
    }
  }, [movieDetail, loading]);

  if (!show) {
    return null;
  }

  return (
    <div className='details__container'>
      <div className='details__container-inner'>
        {
          loading ?
            <ClipLoader color={'#C00404'} loading={loading} size={100} /> :
            (
              <div>
                <div className="img__detail">
                  <img className='image__datails' src={movieDetail.backdrop_path !== null ? `https://image.tmdb.org/t/p/w342${movieDetail.backdrop_path}` : 'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg'} alt="poster" />
                </div>
                <div className='detail__information'>
                  <h4>Title: {movieDetail.title}</h4>
                  <p>Runtime: {movieDetail.runtime}</p>
                  {
                    movieDetail?.genres?.length > 1 ?
                      (
                        <div>
                          <span>Genres: </span>
                          {movieDetail?.genres?.map((g, i) => (
                            <span key={i}>{g.name} </span>
                          ))}
                        </div>
                      ) :
                      <span>Genre: {movieDetail?.genres?.name}</span>
                  }
                  <p>Release date: {movieDetail.release_date}</p>
                  <p>Rating: {movieDetail.vote_average}</p>
                  <div className='details__overview'>
                    <p>{movieDetail.overview}</p>
                  </div>
                </div>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default Details