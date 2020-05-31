import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'

//only include these once they are built - previous practice exercise
import PatronList from './patron/PatronList'
import BookList from './book/BookList'
//  import EmployeeCard from './employee/EmployeeCard'
//  import OwnerCard from './owner/OwnerCard'


class ApplicationViews extends Component {

  render() {
    return (
      <>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/books" render={(props) => {
          return <BookList />
        }} />
        <Route path="/patrons" render={(props) => {
          return <PatronList />
        }} />
        {/* <Route path="/locations" render={(props) => {
          return <LocationCard />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerCard /> */}
      </>
    )
  }
}

export default ApplicationViews