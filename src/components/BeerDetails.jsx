import React, {Component, Fragment} from "react";
import { NavLink } from "react-router-dom";
// cannot use images within src="../assets/beers.png" so NEED to import the files into the source
import axios from 'axios';

export default class BeerDetails extends Component {

    state = {
        displayedBeer: null,
        isLoading: true,
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
        .then((response) => {
            this.setState({displayedBeer: response.data, isLoading: false})
        })
    }

    render() {
        
    return (
        <Fragment className="container-fluid justify-contents-center" width="25vw">
            <h1>Single Beer!</h1>
            <NavLink to="/">Home</NavLink>

            {this.state.isLoading && <h3>hang on a moment!......</h3>}

            {!this.state.isLoading && (
                <div>
                    <h1>{this.state.displayedBeer.name}</h1>
                    <p>{this.state.displayedBeer.description}</p>
                </div>
            
            )}
        </Fragment>
        )
    }
}

