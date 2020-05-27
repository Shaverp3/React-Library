import React, { Component } from 'react'
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import './Library.css'


class Library extends Component {
    //kennelName = "Student Kennels"

    render() {
        return (
            <>
                <NavBar />
                <ApplicationViews />
            </>

        );
    }
}

export default Library;