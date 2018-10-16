import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import SearchForm from './Components/SearchForm';
import Navigation from './Components/Navigation';

class App extends Component {
  render() {

    return(

      <div>

        <Navigation/>
        <SearchForm/>

      </div>

    )

  }

}

export default App;
