import React from 'react';
import {withRouter} from 'react-router';
import _ from 'lodash';
import Movies from '../Movies';
import { MovieFullInfo } from '../components/movie/MovieFullInfo';
import {Content} from '../components/Content';

class MoviePage extends React.Component {
	constructor(props) {
		super(props);

		this.goSearch = this.goSearch.bind(this);

		this.state = {
			value: this.props.match.params.title,
			movie: {},
			movies: []
		};

		this.findMovie(this.state.value);

	}

	findMovie(query) {
		this.state.movie = _.find(Movies, movie =>  movie.title === query);

		if (this.state.movie.director) {
			this.findSimilarMovies(this.state.movie.director);
		}
	}

	findSimilarMovies(director) {
		const movieId = this.state.movie.id;

		this.state.movies = _.filter(Movies, movie => movie.director === director && movie.id !== movieId);
	}

	goSearch(e) {
		e.preventDefault();
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				<MovieFullInfo movie={this.state.movie} goSearch={this.goSearch} />
				<div className="subheader">Films by {this.state.movie.director}</div>
				<Content movies={this.state.movies} findMovie={this.findMovie}/>
			</div>
		)
	}
}

export default withRouter(MoviePage);