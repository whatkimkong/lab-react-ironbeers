import React, {Component, Fragment} from "react";
import { NavLink } from "react-router-dom";
// cannot use images within src="../assets/beers.png" so NEED to import the files into the source
import axios from 'axios';


export default class NewBeer extends Component {

    state = {
        name: "",
        description: "",
        contributedBy: ""
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
            name: this.state.name,
            description: this.state.description,
            contributed_by: this.state.contributedBy, // note how the API will name it - might receive the data as contributedBy, but adds it to the API type which is contributed_by
        })
        .then(() => {
            // a simple way to redirect!!!
            this.props.history.push("/all-beers")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        
    return (
        <Fragment className="container-fluid justify-contents-center">
            <NavLink to="/">Home</NavLink>

            <h1>Add a new beer!</h1>

            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={this.handleChange} type="text" name="name" value={this.state.name}></input>

                <label htmlFor="description">Description</label>
                <input onChange={this.handleChange} type="text" name="description" value={this.state.description}></input>

                <label htmlFor="contributedBy">Contributed By</label>
                <input onChange={this.handleChange} type="text" name="contributedBy" value={this.state.contributedBy}></input>

                <button type="submit">Add a new beer!</button>
            </form>
        </Fragment>
        )
    }
}


// {this.state.isLoading && <h3>hang on a moment!......</h3>}

//             {!this.state.isLoading && this.state.listOfBeers.map((eachBeer) => {
