import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <div>
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="/">Attendify</a></li>
                <li className="navbar-item"><a href="/login">Login</a></li>
                <li className="navbar-item"><a href="/signup">Sign Up</a></li>
            </ul>
            </nav>

            <p className='paragraph'>
            Welcome to Automated Attendance Tracker
            </p>
            </div>
    );
};

export default Navbar;
