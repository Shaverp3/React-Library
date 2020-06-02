import React, { Component } from 'react';
import PatronManager from '../../modules/PatronManager';
import './PatronForm.css'

class PatronForm extends Component {
    state = {
        name: "",
        phone: "",
        email: "",
        DOB: "",
        librariesId: 1,
        active: true,
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewPatron = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.phone === "" || this.state.email === "") {
            window.alert("Please input a name, phone number and email address");
        } else {
            this.setState({ loadingStatus: true });
            const patron = {
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                DOB: this.state.DOB,
                librariesId: this.state.librariesId,
                active: this.state.active,
            };

            // Create the animal and redirect user to animal list
            PatronManager.post(patron)
                .then(() => this.props.history.push("/patrons"));
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
                                id="name"
                                placeholder="Full Name"
                            />
                            <label htmlFor="Name">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="phone"
                                placeholder="Phone number"
                            />
                            <label htmlFor="phone">Phone #</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="email"
                                placeholder="Email address"
                            />
                            <label htmlFor="email">Email address</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="DOB"
                                placeholder="Date of Birth"
                            />
                            <label htmlFor="DOB">DOB</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewPatron}
                            >Add Patron</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default PatronForm