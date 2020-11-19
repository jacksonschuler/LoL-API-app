import React from 'react';
import './App.css';
import Landing from "./pages/landing";
import UserPage from "./pages/user_page";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MatchPage from "./pages/match_page";
import NotFound from "./pages/404";

function App() {
  return (
      <>
        <Router>
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route exact path='/summoner/:name' component={UserPage}/>
                <Route path='/summoner/:name/match/:match_id' component={MatchPage}/>
                <Route path ='/404' component={NotFound}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
      </>
  );
}

export default App;
