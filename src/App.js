import { Component } from 'react';
import './App.css';

import Hello from './components/Hello'
import Ritesh from './components/Ritesh'
import React from 'react';
import My from './components/My'
import Myclasscomp from './components/Myclasscomp'
import Ajsxcop from './components/Ajsxcop'
import Propes from './components/Propes'
import Buttonimpl from './components/Buttonimpl'
class App extends Component {
  render(){
  return (
    <div className="App">
    
    <Buttonimpl/>
    <Hello/>
     <Ritesh/>
     <My/>
     <Myclasscomp/>
     <Ajsxcop/>
     <Propes name="ritesh" heroname="rajasthan">
     <p>hello ritesh malav</p>
     <button>ACTION1</button>
     </Propes>
     <Propes name="abishek sing" heroname="bengale">
     <button>ACTION2</button>
     </Propes>
     <Propes name="ankit anand" heroname="rachi"/>
     <Propes name="keshav kumar" heroname="patana"/>     
    

    </div>
  );
}
}
export default App;
