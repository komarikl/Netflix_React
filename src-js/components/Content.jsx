import React from 'react';

export const Content = function(props){
    const moviesList = (
        <ul className="movies-list">
            {props.movies.map((movie) => 
                <li className="movies-list__item movie" key={movie.id}>
                    <img className="movie__img" src={movie.picture.source} alt={movie.picture.alt}/>
                    <div className="movie__description">
                        <span className="description__title">{movie.title}</span>
                        <span className="description__year">{movie.year}</span>
                        <span className="description__category">{movie.category}</span>
                    </div>
                </li>
            )}
        </ul>
    );

    return (<div className="content" >{moviesList}</div>);
};