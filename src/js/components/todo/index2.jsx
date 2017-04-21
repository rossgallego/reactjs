import React from 'react';

import Ninja from './todo-list.jsx';
import NinjaAdd from './add-item.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ninjas: [
        {
          name: "michaelangelo"
        },
        {
          name: "raphael"
        }
      ]
    }
  }

  addNinja(){

  }
  deleteNinja(){

  }

  render() {
    return (
      <div>
        <h1> to do </h1>
        <Ninja ninjas ={this.state.ninjas}/>
        <NinjaAdd />
      </div>
    );
  }
}
export default App