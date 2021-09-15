
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
// import AboutUs from './components/AboutUs';
import Login from './pages/login';
import SignUp from './pages/signup';
// import AdminView from './components/AdminView';

function App() {
  return (
    <Router>
    <Switch>
      <Route path='/' exact component={Home}/>
      {/* <Route path='/aboutus' component={AboutUs}/> */}
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={SignUp}/>
      {/* <Route path='/booknow' component={BookNow}/>
      <Route path='/admin' component={AdminView}/> */}
    </Switch>
  </Router>
  );
}

export default App;
