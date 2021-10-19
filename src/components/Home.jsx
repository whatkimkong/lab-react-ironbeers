import React, {Component, Fragment} from "react";
import { NavLink } from "react-router-dom";
// cannot use images within src="../assets/beers.png" so NEED to import the files into the source
import beersImg from '../assets/beers.png';
import newBeerImg from '../assets/new-beer.png';
import randomBeerImg from '../assets/random-beer.png';



export default class Home extends Component {
    render() {
    return (
        <Fragment className="container-fluid justify-contents-center">
            <div class="card" width="60vw">
                <img src={beersImg} class="card-img-top" alt="beers"/>
                <div class="card-body justify-contents-center">
                <NavLink to="/allBeers">All Beers</NavLink>
                <p>A little text about all the beers</p>
                </div>
            </div>

            <div class="card" width="60vw">
                <img src={newBeerImg} class="card-img-top" alt="random-beer"/>
                <div class="card-body justify-contents-center">
                <NavLink to="/randomBeer">Random Beer Roulette</NavLink>
                <p>A little text about all the randomness</p>
                </div>
            </div>

            <div class="card" width="60vw">
                <img src={randomBeerImg} class="card-img-top" alt="new-beer"/>
                <div class="card-body justify-contents-center">
                <NavLink to="/newBeer">Add a New Beer</NavLink>
                <p>A little text about all the beers</p>
                </div>
            </div>
            
            </Fragment>
    )
    }
}