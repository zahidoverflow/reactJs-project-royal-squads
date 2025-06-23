import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import './Home.css'

const Home = (props) => {
    const { setLeagueId } = props
    const [leagues, setLeagues] = useState([])
    useEffect(() => {
        axios('https://www.thesportsdb.com/api/v1/json/123/all_leagues.php')
            .then(data => setLeagues(data.data.leagues.slice(0, 15)))
    }, [])

    return (
        <div className="container">
            {
                leagues.map(eachLeague => <Card leagues={eachLeague} setLeagueId={setLeagueId} key={eachLeague.idLeague} />)
            }
        </div>
    )
}

export default Home;
