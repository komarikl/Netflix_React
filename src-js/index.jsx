import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import IndexPage from './pages/IndexPage';
import SearchPage from './pages/SearchPage';
import MoviePage from './pages/MoviePage';

const render = () => {
    ReactDom.render(
        <Router>
            <AppContainer>
                <App>
                  <Switch>
                    <Route exact path="/" component={IndexPage} />
                    <Route path="/search/:query" component={SearchPage}  />
                    <Route path="/movie/:title" component={MoviePage} />
                  </Switch>
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
