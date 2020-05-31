import React, { Component } from 'react'
//import the components we will need
import PatronCard from './PatronCard'
import PatronManager from '../../modules/PatronManager'

class PatronList extends Component {
    //define what this component needs to render
    state = {
        patrons: [],
    };

    archivePatron = id => {
        PatronManager.archive(id)
        .then(PatronManager.getAll)
        .then((newpatrons) => {
            this.setState({
                patrons: newpatrons
            })
        })
    }

    componentDidMount() {
        console.log("PATRON LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        PatronManager.getAll()
            .then((patrons) => {
                console.log(patrons)
                this.setState({
                    patrons: patrons
                })
            })
    }
    /*using .map instead of foreach*/
    render() {
        console.log("PATRON LIST: Render");

        return (
        <>
        <h3>List of Patrons:<span className="card-employeename"></span></h3>
        <div className="container-cards">
        {this.state.patrons.map(currentPatronInLoop =>
         <PatronCard
            key={currentPatronInLoop.id}
            patronProp={currentPatronInLoop}
            archivePatron={this.archivePatron}
        />
    )}
        </div>
        </>
        )
    }
}

export default PatronList