import React from 'react';

export default class Search extends React.Component {
    render() {
      return (
        <form onSubmit={this.props.onSubmit} className="search-form">
            <label className="search-form__label" htmlFor="search-field">Find your movie</label>
            <input className="search-form__field" type="text" name="search-field" id="search-field" value={this.props.value} onChange={this.props.onChange}/>
            <div className="search-form__by by">Search by
              <input className="by__title" 
                    type="radio" 
                    name="serching" 
                    id="title" 
                    value="title" 
                    checked={this.props.selectedSearchType === 'title'}
						        onChange={this.props.onSearchTypeChange}/>
              <label htmlFor="title">Title</label>
              <input className="by__director"
                     type="radio" 
                     name="serching" 
                     id="director"
                     value="director"
						         checked={this.props.selectedSearchType === 'director'}
						         onChange={this.props.onSearchTypeChange}/>
              <label htmlFor="director">Director</label>
            </div>
            <input className="search-form__submit" type="submit" value="Search" />
        </form>
      );
    }
  }