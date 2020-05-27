import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import BookCard from './book/BookCard'
//only include these once they are built - previous practice exercise
 import PatronCard from './patron/PatronCard'
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
          return <BookCard />
        }} />
        <Route path="/patrons" render={(props) => {
          return <PatronCard />
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