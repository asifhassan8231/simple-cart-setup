import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Link to="/shop">Shop</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/manage">Manage Inventory</Link>
        </div>
    );
};

export default Header;