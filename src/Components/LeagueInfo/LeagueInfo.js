import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './LeagueInfo.css'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faMapMarkedAlt, faFlagCheckered, faVenus, faBasketballBall } from '@fortawesome/free-solid-svg-icons'

const LeagueInfo = () => {
    const [leagueInfo, setLeagueId] = useState([])
    const param = useParams();
    useEffect(() => {
        axios(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${param.idLeague}`)
            .then(data => setLeagueId(data.data.leagues[0]))
    })
    const { strLeague, strDescriptionEN, strCountry, strGender, strSport, strFacebook, strYoutube, strTwitter, intFormedYear } = leagueInfo
    const fbIcon = <FontAwesomeIcon icon={faFacebook} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
    const ytIcon = <FontAwesomeIcon icon={faYoutube} />
    const foundedIcon = <FontAwesomeIcon icon={faMapMarkedAlt} />
    const flagIcon = <FontAwesomeIcon icon={faFlagCheckered} />
    const sportsIcon = <FontAwesomeIcon icon={faBasketballBall} />
    const genderIcon = <FontAwesomeIcon icon={faVenus} />
    const web = "https://www."
    const http = "https://"

    return (
        <div>
            <div className="basic-data">
                <div className="text">
                    <h2>{strLeague}</h2> <br />
                    <p>{foundedIcon} Founded: {intFormedYear}</p>
                    <p>{flagIcon} Country: {strCountry}</p>
                    <p>{sportsIcon} Sport type: {strSport}</p>
                    <p>{genderIcon} Gender: {strGender} </p>
                </div>
                <div className="img-div">
                    <img className="img" src="https://i.ibb.co/8bw9szr/male.png" alt="male" />
                </div>
            </div>
            <div className="description">
                <p>Description: {strDescriptionEN}</p>
                <div className="icons">
                    <a href={`${web}${strTwitter}`} className="twitterIcon">{twitterIcon}</a>
                    <a href={`${http}${strFacebook}`}>{fbIcon}</a>
                    <a href={`${http}${strYoutube}`} className="ytIcon">{ytIcon}</a>
                </div>
            </div>
        </div>
    );
};

export default LeagueInfo;