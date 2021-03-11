import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound'
import LeagueInfo from './Components/LeagueInfo/LeagueInfo'
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [leagueId, setLeagueId] = useState([])

  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home leagueId={leagueId} setLeagueId={setLeagueId} />
          </Route>
          <Route path='/league/:idLeague'>
            <LeagueInfo leagueId={leagueId} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
