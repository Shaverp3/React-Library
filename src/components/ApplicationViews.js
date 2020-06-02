import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
//only include these once they are built - previous practice exercise
import BookList from './book/BookList'
import BookDetail from './book/BookDetail'
import BookForm from './book/BookForm'
import PatronForm from './patron/PatronForm'
import PatronList from './patron/PatronList'


class ApplicationViews extends Component {

    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route exact path="/books" render={(props) => {
                    return <BookList {...props} />
                }} />
                <Route exact path="/patrons" render={(props) => {
                    return <PatronList {...props} />
                }} />
 
                <Route path="/books/:bookId(\d+)" render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <BookDetail bookId={parseInt(props.match.params.bookId)} {...props} />
                }} />

                <Route path="/books/new" render={(props) => {
                    return <BookForm {...props} />
                }} />

                <Route path="/patrons/new" render={(props) => {
                    return <PatronForm {...props} />
                }} />
            </>
        )
    }
}

export default ApplicationViews