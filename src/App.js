import React from 'react';
import './App.css';
import Landing from "./pages/landing";
import UserPage from "./pages/user_page";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <>
        <Router>
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route path='/summoner/:name' component={UserPage}/>
            </Switch>
        </Router>
      </>
  );
}

export default App;
