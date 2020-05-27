import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <>
                <h2>Shaver Public Library
                </h2>
                <address> Charleston, WV
            </address>
                {<picture>
                    <img src={require('./Library.jpg')} alt="My Library" />
                </picture>}
            </>
        )
    }
}

export default Home;