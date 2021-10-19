import React, {Component, Fragment} from "react";
import { NavLink } from "react-router-dom";
// cannot use images within src="../assets/beers.png" so NEED to import the files into the source
import axios from 'axios';

const imageStyle = {
    border: 'none',
    height: '20vh',
    width: '4vw',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
    padding: '5px',
  }


export default class AllBeers extends Component {

    state = {
        listOfBeers: null,
        isLoading: true,
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            this.setState({listOfBeers: response.data, isLoading: false})
        })
    }

    render() {
        
    return (
        <Fragment>
            <h1>Here are all the beers!</h1>
            <NavLink to="/">Home</NavLink>

            {this.state.isLoading && <h3>hang on a moment!......</h3>}

            {!this.state.isLoading && this.state.listOfBeers.map((eachBeer) => {
                return (
                  <NavLink to={`/all-beers/${eachBeer._id}`} className="container-fluid">
                    <div className="card" width="4vw">
                      <img
                        src={eachBeer.image_url}
                        className="card-img-top"
                        alt="beers"
       
                        style={imageStyle}
                      />
                      <div className="card-body justify-contents-center">
                        <h5>{eachBeer.name}</h5>
                        <p>{eachBeer.description}</p>
                      </div>
                    </div>
                  </NavLink>
                );
            })}
            
        </Fragment>
        )
    }
}

