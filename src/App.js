import React from 'react';
import './App.css';
import Home from './components/Home';
import { Switch, Route } from "react-router-dom"
import AllBeers from './components/AllBeers';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails';


function App() {
    return (
      <div className="container-fluid justify-contents-center">

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/all-beers" component={AllBeers}/>
          <Route exact path="/new-beer" component={NewBeer}/>
          <Route path="/all-beers/:id" component={BeerDetails}/>

        </Switch>
      </div>
      
  );
}


export default App;
