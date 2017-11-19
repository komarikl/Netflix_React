import React from 'react';

export const MoviePicture = (props) => (
    <img className="movie-picture" src={props.source} alt={props.alt}/>
);