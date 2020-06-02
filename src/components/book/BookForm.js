import React, { Component } from 'react';
import BookManager from '../../modules/BookManager';
import './BookForm.css'

class BookForm extends Component {
    state = {
        bookTitle: "",
        author: "",
        coverURL: "",
        genre: "",
        ISBN: "",
        librariesId: 1,
        available: true,
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewBook = evt => {
        evt.preventDefault();
        if (this.state.bookTitle === "" || this.state.author === "" || this.state.coverURL === "") {
            window.alert("Please input a book title, author and coverURL");
        } else {
            this.setState({ loadingStatus: true });
            const book = {
                title: this.state.bookTitle,
                author: this.state.author,
                cover: this.state.coverURL,
                genre: this.state.genre,
                ISBN: this.state.ISBN,
                librariesId: this.state.librariesId,
                available: this.state.available,
            };

            // Create the animal and redirect user to animal list
            BookManager.post(book)
                .then(() => this.props.history.push("/books"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="bookTitle"
                                placeholder="Book Title"
                            />
                            <label htmlFor="Title">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="author"
                                placeholder="Author"
                            />
                            <label htmlFor="author">Author</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="coverURL"
                                placeholder="URL for Cover Pic"
                            />
                            <label htmlFor="coverURL">URL for Cover</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="genre"
                                placeholder="Fiction or Non-fiction"
                            />
                            <label htmlFor="genre">Genre</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="ISBN"
                                placeholder="ISBN"
                            />
                            <label htmlFor="ISBN">ISBN</label>
                            
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewBook}
                            >Create</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default BookForm