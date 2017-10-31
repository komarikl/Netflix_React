import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import IndexPage from './pages/IndexPage';
import SearchPage from './pages/SearchPage';

const render = () => {
    ReactDom.render(
        <Router>
            <AppContainer>
                <App>
                    <Route exact path="/" component={IndexPage} />
                    <Route path="/search/:query" component={SearchPage} />
						{/* 
						<Route path="/movie/:title" component={MoviePage} /> */}
                </App>
            </AppContainer>
        </Router>,
        document.getElementById('app')
    )
}

render();

if (module.hot) {
    module.hot.accept('./App', render);
}
