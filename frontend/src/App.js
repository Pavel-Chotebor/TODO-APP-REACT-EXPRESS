import logo from './logo.svg';
import './App.css';
import Registration from './registration/Registration';
import Header from './header/Header';
import LeftMenu from './leftMenu/LeftMenu';
import PopMessage from './popMessage/PopMessage';
import MainPage from './pages/MainPage'
import { Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Registration></Registration> */}
      {/* <Header name='TODO app'></Header> */}
      {/* <LeftMenu></LeftMenu> */}
      {/* <PopMessage todo={{name:'buy something'}}></PopMessage> */}
      {/* <MainPage></MainPage> */}
      <Router className="App">
        <Header></Header>
        <LeftMenu></LeftMenu>
        <Switch>
          <LeftMenu></LeftMenu>
          <Router path="/todo">
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
