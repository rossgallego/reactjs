import React from 'react';

import Nose from './components/nose.jsx'
import Wing from "./components/wing.jsx"
import Intercom from "./components/intercom.jsx"
// 0
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rabbit: "bugs bunny",
            duck: "daffy"
        }

          this.testFunction = this.testFunction.bind(this);
      }
      // end constructor

    testFunction(){
      // alert("test")
    }  

    render() {
      return (
        <div className="three-delta">
            <Nose character={this.state.duck}/>
            <Wing />
            <Intercom />
        </div>
      );
    }
  
}



export default App