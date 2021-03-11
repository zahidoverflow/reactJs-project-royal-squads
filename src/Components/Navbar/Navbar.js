import React from 'react';
import 'react-bootstrap/Navbar'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark justify-content-between">
                <div className="navbar-brand text-white">Royal Squads</div>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="League name" aria-label="Search artists"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
                </form>
            </nav>
        </div>
    );
};

export default Navbar;