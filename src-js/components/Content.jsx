import React from 'react';
import { Link } from 'react-router-dom';

export class Content extends React.Component{
  goToMovie(title){
    return function(){
      this.props.findMovie(title)
    }
  }

    render(){return (<div className="content" >
      <ul className="movies-list">
        {this.props.movies.map((movie) =>
                            <Link to={`/movie/${movie.title}`} onClick={this.goToMovie(movie.title)} className="movies-list__item movie" key={movie.id}>
                              <img className="movie__img" src={movie.picture.source} alt={movie.picture.alt}/>
                              <div className="movie__description">
                                <span className="description__title">{movie.title}</span>
                                <span className="description__year">{movie.year}</span>
                                <span className="description__category">{movie.category}</span>
                              </div>
                            </Link>
        )}
      </ul>
    </div>)}
};