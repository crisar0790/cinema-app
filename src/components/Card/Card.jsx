import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Card.css';
import Details from '../Details/Details';
import { clearMovieDetails, detailsMovies } from '../../redux/actions';
import { FaStar } from 'react-icons/fa';

function Card({ image, name, rating, id }) {

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  function handleDetail() {
    dispatch(detailsMovies(id));
  }

  function handleClearDetail() {
    dispatch(clearMovieDetails());
  }

  function ratingToStars() {
    let starRating = Math.ceil(rating / 2);
    const stars = [];
    for (let i = 1; i <= starRating; i++) {
      stars.push(i);
    }
    return stars;
  }

  return (
    <div className='card__container' onMouseEnter={() => { setShow(true); handleDetail() }} onMouseLeave={() => { setShow(false); handleClearDetail() }}>
      <div className="image__container">
        <img src={image} alt="film" className="img__movies" />
      </div>
      <div className="nameAndRating">
        <h4 className="card__name">{name}</h4>
        <div className='star__container'>
          {
            ratingToStars().map((s) => (
              <FaStar key={s} className='star' color={'#ffc107'} size={20} />
            ))
          }
        </div>
      </div>
      <Details show={show} />
    </div>
  )
}

export default Card