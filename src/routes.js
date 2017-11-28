import SearchPage from './pages/SearchPage'
import MoviePage from './pages/MoviePage'
import NotFound from './components/NotFound'
import App from './components/App'
import PAGES from './pages/pages'

const routes = [
  {
    component: App,
    routes: [
      {
        path: `/${PAGES.SEARCH}/:query`,
        exact: true,
        component: SearchPage,
      },
      {
        path: '/:type/:id',
        exact: true,
        component: MoviePage,
      },
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
]

export default routes
