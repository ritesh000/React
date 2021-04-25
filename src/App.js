import { Component } from 'react';
import './App.css';

import Hello from './components/Hello'
import Ritesh from './components/Ritesh'
import React from 'react';
import My from './components/My'
import Myclasscomp from './components/Myclasscomp'
import Ajsxcop from './components/Ajsxcop'

class App extends Component {
  render(){
  return (
    <div className="App">
     <Hello/>
     <Ritesh/>
     <My/>
     <Myclasscomp/>
     <Ajsxcop/>
    </div>
  );
}
}
export default App;
