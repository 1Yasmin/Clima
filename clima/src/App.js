import React, { Component } from 'react';

import WeatherLogic from './components/WeatherLogic';

class App extends Component {
    render() {
      return ( 
        <div className = "App" >
          <header className = "App-header" >
          <h1 className = "App-title" > Weather App  </h1> 
          </header> 
          <WeatherLogic/>
          <p className = "App-intro"> </p> 

        </div>
      );
    }
}

export default App;