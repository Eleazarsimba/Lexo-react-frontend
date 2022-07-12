import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import jwtDecode from "jwt-decode";
import Activate from './components/Actions/Activate';
import Resetform from './components/Actions/Resetform';
import Resetpass from './components/Actions/Resetpass';
import Titlebar from './components/Dashboard/Titlebar';
import Loginform from './components/Loginform';
import Pagenotfound from './components/Pagenotfound';
import Homepage from './components/Dashboard/Homepage';
import Subscribe from './components/Actions/Subscribe';
import Offers from './components/Dashboard/Offers';
import Theproducts from './components/Dashboard/Theproducts';

function App() {
  if (localStorage.getItem("token")) {
    const jwt_Token_decoded = jwtDecode(localStorage.getItem("token"));
    // console.log(jwt_Token_decoded.exp * 1000);
    // console.log(Date.now());
    if (jwt_Token_decoded.exp * 1000 < Date.now()) {
      localStorage.clear();
    } 
  }
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/offerhere" component={Offers} />
            <Route exact path="/producthere" component={Theproducts} />
            <Route exact path="/dashboard" component={Titlebar} />
            <Route exact path="/login" component={Loginform} />
            <Route exact path="/resetpass" component={Resetpass} />
            <Route exact path="/activatelink/:email" component={Activate} />
            <Route exact path="/resetlink/:id" component={Resetform} />
            <Route exact path="/subscribe/:email" component={Subscribe} />
            <Titlebar />
            <Route path="*" component={Pagenotfound} />
        </Switch>
    </Router>
  );
}

export default App;
