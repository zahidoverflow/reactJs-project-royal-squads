import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import './Card.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Card = (props) => {
    const { idLeague, strLeague, strSport } = props.leagues
    const { setLeagueId } = props
    const arrowIcon = <FontAwesomeIcon icon={faArrowCircleRight} />
    const [logo, setLogo] = useState([])
    useEffect(() => {
        axios(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(data => setLogo(data.data.leagues))
    })
    let history = useHistory();
    const handleLeagueInfo = (idLeague) => {
        setLeagueId(idLeague)
        history.push(`/league/${idLeague}`);
    }

    return (
        <div className="container">
            <div className="card">
                {
                    logo.map(each => <img className="card-img-top" src={each.strLogo} alt="caption" />)
                }
                <div className="card-body">
                    <h5 className="card-title">{strLeague}</h5>
                    <p className="card-text">Sports type: {strSport}</p>
                    <button onClick={() => handleLeagueInfo(idLeague)} className="btn btn-primary">Explore {arrowIcon}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
