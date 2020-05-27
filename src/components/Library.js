import React, { Component } from 'react'
import './Library.css'


class Library extends Component {
    //kennelName = "Student Kennels"

    render() {
        return (
            <div class="container-main">
                <div class="section-content">
                    <h2>Shaver Public Library<br />
                                      </h2>
                                      <address> Charleston, WV
                	</address>
                                      {<picture>
            <img src={require('./Library.jpg')} alt="My Library" />
          </picture>}
                    
                </div>
              
            </div>

        );
    }
}

export default Library;