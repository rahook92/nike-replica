import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';

const navbar = (props) => {
    return (
        <React.Fragment>
            <nav className='Navbar'>
                <img className='Logo' alt='logo' /> 
                <ul className='Link-List'>
                    <li><Link className='Links' to='/'>New Releases</Link></li>
                    <li><Link className='Links' to='/Men'>Men</Link></li>
                    <li><Link className='Links' to='/'>Women</Link></li>
                    <li><Link className='Links' to='/'>Kids</Link></li>
                    <li><Link className='Links' to='/'>Customize</Link></li>
                    <li><Link className='Links' to='/'>Sale</Link></li>
                </ul>
                <div className='Search-Bar'></div>
                <div className='Nav-Icons'>
                    <div className='Favorite-Icon'></div>
                    <div className='Shopping-Bag-Icon'></div>
                </div>
            </nav>
            <Dropdown />
        </React.Fragment>
    );
}

export default navbar;