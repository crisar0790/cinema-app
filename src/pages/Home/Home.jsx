import React from 'react';
import Filter from '../../components/Filter/Filter';
import SearchBar from '../../components/SearchBar/SearchBar';

function Home() {
    return (
        <div className='home__container'>
            <div className="searchAndFilter">
                <h1>Your favourite movies are here!</h1>
                <SearchBar />
                <Filter />
            </div>
            <div className="cards__container">
                
            </div>
        </div>
    )
}

export default Home