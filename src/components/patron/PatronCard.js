import React, { Component } from 'react';
import './Patron.css'
class PatronCard extends Component {
    render() {
        const isActive = this.props.patronProp.active;
        return (
            <div>
                {isActive ?
                    <div className="card">
                        <div className="card-content">

                            <h3 className="card-bookTitle">
                                {this.props.patronProp.name}</h3>
                            <button type="button" onClick={() =>
                                this.props.archivePatron(this.props.patronProp.id)}>Archive</button>
                        </div>
                    </div>
                    :
                    (<></>)}
            </div>
        )
    }
}


export default PatronCard;