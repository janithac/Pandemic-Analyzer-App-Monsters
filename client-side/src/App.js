import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import AreaAnalyze from './pages/analyzeArea';
import Login from './pages/login';
import SignUp from './pages/signup';
import AdminView from './pages/admin';
import AnalyzeArea from './pages/analyzeArea';

function App() {
  return (
    <Router>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/aboutus' component={AboutUs}/>
      <Route path='/area'component={AnalyzeArea}/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/admin' component={AdminView}/>
    </Switch>
  </Router>
  );
}

export default App;
