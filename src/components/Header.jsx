import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
    return (
        <div className="Header">
            <h1 className="Header-title">
                <Link to="/">Main Title h1</Link>
            </h1>
            <div className="Header-checkout">
                <Link to="/checkout">
                    <i className="fas fa-shopping-basket"></i>
                </Link>
            </div>
        </div>
    )
}

export default Header;