import React from 'react';
import { MoviePicture } from './Picture';
import { ReleaseYear } from './ReleaseYear';
import { MovieTitle } from './MovieTitle';

export const MovieFullInfo = (props) => (
    <div className="movie-wrapper">
        <button className="back-button">Back to search</button>
        <MoviePicture source={props.movie.picture.source} alt={props.movie.picture.alt} />
        <div className="info-wrapper">
            <MovieTitle title={props.movie.title} />
            <div className="movie-rating">{props.movie.rating}</div>
            <span className="movie-category">{props.movie.category}</span>
            <ReleaseYear year={props.movie.year} />
            <span className="movie-duration">{props.movie.duration} min</span>
            <p className="movie-description">{props.movie.description}</p>
            <span className="movie-director">Director: {props.movie.director}</span>
            <span className="movie-cast">Cast: {props.movie.cast}</span>
        </div>
    </div>  
);