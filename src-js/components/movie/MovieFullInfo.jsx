import React from 'react';
import { MoviePicture } from './Picture';
import { ReleaseYear } from './ReleaseYear';
import { MovieTitle } from './MovieTitle';

export class MovieFullInfo extends React.Component{
  render(){
    return (
      <div className="movie-wrapper">
        <button className="back-button" onClick={this.props.goSearch}>Back to search</button>
        <MoviePicture source={this.props.movie.picture.source} alt={this.props.movie.picture.alt} />
        <div className="info-wrapper">
          <MovieTitle title={this.props.movie.title} />
          <div className="movie-rating">{this.props.movie.rating}</div>
          <span className="movie-category">{this.props.movie.category}</span>
          <ReleaseYear year={this.props.movie.year} />
          <span className="movie-duration">{this.props.movie.duration} min</span>
          <p className="movie-description">{this.props.movie.description}</p>
          <span className="movie-director">Director: {this.props.movie.director}</span>
          <span className="movie-cast">Cast: {this.props.movie.cast}</span>
        </div>
      </div>
    )
  }
}