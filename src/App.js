import Home from './Component/Home/Home'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';
import CountryDetails from './Component/CountryDetails/CountryDetails';

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/details/:alpha2Code">
         <CountryDetails></CountryDetails>
       </Route>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="*">
            <NoMatch />
          </Route>
     </Switch>
   </Router>
  );
}

export default App;
