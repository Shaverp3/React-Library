import React, { Component } from 'react';
import './Book.css'
class BookCard extends Component {
    render() {
        const isAvailable = this.props.bookProp.available;
        return (
            <div>
                {isAvailable ?
                    <div className="card">
                        <div className="card-content">

                            <h3 className="card-bookTitle">
                                {this.props.bookProp.title}</h3>
                            <button type="button" onClick={()=>
                            this.props.deleteBook(this.props.bookProp.id)}>Delete</button>    
                        </div>
                    </div>
                    :
                    (<></>)}
            </div>)
    }
}

export default BookCard;