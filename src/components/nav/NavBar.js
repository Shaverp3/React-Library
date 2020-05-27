import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

    render() {

        return (
            <header>
                <h1 className="site-title">Shaver Public Library<br />
                    <small>"Outside a Dog, A Book is Man's Best Friend - Inside A Dog, It's Too Dark to Read"<br />
                    <i> - Groucho Marx</i></small>
                </h1>
                <nav>
                    <ul className="container">
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/books">Books</Link></li>
                        <li><Link className="nav-link" to="/patrons">Patrons</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar;