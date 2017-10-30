import React from 'react';

export class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
    }
    
    onSubmit(e){
      alert(`${this.state.value} will be found soon.`);
      e.preventDefault();
    }

    onChange(e){
        this.setState({value: e.target.value});
    }
    
    render() {
      return (
        <form onSubmit={this.onSubmit} className="search-form">
            <label className="search-form__label" htmlFor="search-field">Find your movie</label>
            <input className="search-form__field" type="text" name="search-field" id="search-field" value={this.state.value} onChange={this.onChange}/>
            <div className="search-form__by by">Search by
              <input className="by__title" type="radio" name="serching" id="title"/><label htmlFor="title">Title</label>
              <input className="by__director" type="radio" name="serching" id="director"/><label htmlFor="director">Director</label>
            </div>
            <input className="search-form__submit" type="submit" value="Search" />
        </form>
      );
    }
  }