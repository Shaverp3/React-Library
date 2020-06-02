import React, { Component } from 'react';
import BookManager from '../../modules/BookManager';
import './BookDetail.css'
//import BooksPatronsManager from '../../modules/BooksPatronsManager';
//import BookCard from './BookCard';

class BookDetail extends Component {

    state = {
        title: "",
        author: "",
        cover: "",
        patrons: []
    }

    componentDidMount() {
        console.log("BookDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to the data; put it into state
        BookManager.get(this.props.bookId)
            .then((bookProp) => {
                this.setState({
                    title: bookProp.title,
                    author: bookProp.author,
                    cover: bookProp.cover
                })
                // BooksPatronsManager.getPatronsThatCheckedOutBooks(this.props.bookId)
                //     .then((patrons) => {
                //         this.setState({
                //             patrons: patrons
                //         })
                //     })
            })
    }


    render() {
        console.log("BOOKDETAIL: Render")

        return (
            <>
                <div className="card">
                    <div className="card-content">
                        <picture>
                            <img src={this.state.cover} alt="Cover" />
                        </picture>
                        <h3><span style={{ color: 'darkslategrey' }}>{this.state.title}</span></h3>
                        <p>Author: {this.state.author}</p>
                        {/* {this.state.patrons.map(currentPatronInLoop => <BookCard
                            key={currentPatronInLoop.id}
                        />
                        )} */}

                    </div>
                </div>
            </>
        );
    }
}

export default BookDetail;