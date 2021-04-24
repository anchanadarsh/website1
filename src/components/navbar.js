import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar_wrap">
            <div className="logo_area">
                <Link to="/">Logo</Link>
            </div>
            <div className="link_area">
                <Link className="nav_links" to="/">Home</Link>
                <Link className="nav_links" to="/products">Products</Link>
                <Link className="nav_links" to="/services">Services</Link>
                <Link className="nav_links" to="/contact">Contact</Link>
            </div>

        </nav>
    );
}

export default Navbar;