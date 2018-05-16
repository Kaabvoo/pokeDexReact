import React, { Component } from 'react';
import Headi from './header/header';
import SearchItems from './nav/srch'
import Content from './cont/cont'
import Foot from './footer/foot'
import './App.css';

export default class App extends Component {
  
  render() {
    return(
      <div>
        <header>
          <Headi />
        </header>
        <body className="srch">
          <SearchItems />
          <Content />
        </body>
        <footer>
        <Foot />
        </footer>
      </div>
    );
  }
}