import React from 'react';
import { MoviePicture } from './Picture';
import { ReleaseYear } from './ReleaseYear';
import { MovieTitle } from './MovieTitle';

export const MovieFullInfo = (props) => (
    <div className="info-wrapper">
        <button>Back to search</button>
        <MoviePicture source={props.movie.picture.source} alt={props.movie.picture.alt} />
        <MovieTitle title={props.movie.title} />
        <div>{props.movie.rating}</div>
        <span>{props.movie.category}</span>
        <ReleaseYear year={props.movie.year} />
        <span>{props.movie.duration} min</span>
        <p>{props.movie.description}</p>
        <span>Director: {props.movie.director}</span>
        <span>Cast: {props.movie.cast}</span>
    </div>  
);