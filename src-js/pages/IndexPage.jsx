import React from 'react';
import {withRouter} from 'react-router';
import Search from '../components/Search';

class IndexPage extends React.Component {
	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSearchTypeChange = this.onSearchTypeChange.bind(this);

		this.state = {
			value: this.props.match.params.query,
			selectedSearchType: 'title'
		};
	}

	onChange(e) {
		this.setState({value: e.target.value});
	}

	onSearchTypeChange(e) {
		this.setState({selectedSearchType: e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.history.push('/search/' + this.state.value);
	}

	render() {
		let searchProps = {
			value: this.state.value,
			selectedSearchType: this.state.selectedSearchType
		};

		return (
			<div className='page-wrapper'>
				<Search {...searchProps} onChange={this.onChange} onSearchTypeChange={this.onSearchTypeChange} onSubmit={this.onSubmit} />
				<div className='no-films-warning'>
					No films found
				</div>
			</div>
		)
	}
}

export default withRouter(IndexPage);