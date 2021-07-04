import './App.css';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {
  return (
    <HashRouter>
     
      <Switch> {/**매칭되는 첫번째 라우트만 보여준다. */}
        <Route exact={true} path='/' component ={LandingPage}/>
        <Route path='/login' component ={LoginPage}/>
        <Route path='/register' component ={RegisterPage}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
