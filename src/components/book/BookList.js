import React, { Component } from 'react'
//import the components we will need
import BookCard from './BookCard'
import BookManager from '../../modules/BookManager'

class BookList extends Component {
    //define what this component needs to render
    state = {
        books: [],
    };

    deleteBook = id => {
        BookManager.delete(id)
            .then(BookManager.getAll)
            .then((newbooks) => {
                this.setState({
                    books: newbooks
                })
            })
    }

    componentDidMount() {
        console.log("BOOK LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        BookManager.getAll()
            .then((books) => {
                console.log(books)
                this.setState({
                    books: books
                })
            })
    }
    /*using .map instead of foreach*/
    render() {
        console.log("BOOK LIST: Render");

        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/books/new") }}>
                        New Book
                    </button>
                </section>
                <h3 className="search-bookTitle">Search Books: </h3>
                <input className="searchBooks" type="text"></input>
                <div className="container-cards">
                    {this.state.books.map(currentBookInLoop => <BookCard
                        key={currentBookInLoop.id}
                        bookProp={currentBookInLoop}
                        deleteBook={this.deleteBook}
                    />
                    )}
                </div>
            </>
        )
    }
}

export default BookList