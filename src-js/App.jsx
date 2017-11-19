import React from 'react';
import { Logo } from './components/Logo';
import { Content } from './components/Content';
import Search from './components/Search';
import { MovieFullInfo } from './components/movie/MovieFullInfo';
import { SortBy } from './components/SortBy';

export default class App extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        return (
            <div className="wrapper">
                <header className="header">
                    <Logo />
                    {/* {<Search />} */}
                    {/* {<MovieFullInfo movie={movies[0]}/>} */}
                </header>
                <main className="main">
                    {this.props.children}
                </main>
                <footer className="footer">
                    <Logo />
                </footer>
            </div>
        )
    }
}