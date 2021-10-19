import React from 'react';
import './App.css';
import Home from './components/Home';
import { Switch, Route } from "react-router-dom"

function App() {
    return (
      <div className="container-fluid justify-contents-center">

        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
      
  );
}


export default App;
