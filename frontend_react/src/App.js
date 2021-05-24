import './App.css';
import MainPage from './pages/MainPage'
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import { connect } from 'react-redux'
import IntroPage from './pages/IntroPage'
import {
  collectionForMainPage,
  collectionForIntroPage
} from './common/listOfComponentsForRoutering'


function App({ }) {
  return (
    <Router history={history}>
      <Switch>
        {collectionForIntroPage.map(component =>
          <Route path={component.path}>
            <IntroPage>
              {component.component}
            </IntroPage>
          </Route>
        )}
        <Route path='/welcome'>
          <IntroPage />
        </Route>
        {collectionForMainPage.map(component =>
          <Route path={component.path}>
            <MainPage>
              {component.component}
            </MainPage>
          </Route>
        )}
      </Switch >
    </Router >
  )
}

export default connect(null, null)(App)
