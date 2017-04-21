import React from 'react';

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

   this.addNinja = this.addNinja.bind(this); 
   this.deleteNinja = this.deleteNinja.bind(this); 
  }

  addNinja(e){
    e.preventDefault();

    var newArray = this.state.ninjas.slice();    
        newArray.push({name: this.refs.newNinja.value});   
        this.setState({ninjas:newArray})

       this.refs.newNinja.value = "";
  }

  // deleteNinja(ninja){
  //   var test =ninja;
  //   var func = function(test){
  //     console.log(test)
  //   }
  //   func(test);
  // };


  deleteNinja(i){
    // var todoItems = this.state.ninjas.splice(i,1); 
    // this.setState({todoItems: todoItems});
  };

  render() {
    let gg = this;  
    return (
      <div>
            <h1> to do </h1>

            {this.state.ninjas.map(function(ninja,i){
                return <div>
                    <ul>
                      <li>{ninja.name} {i}</li>


                      <button onClick={gg.deleteNinja(i)}>X</button>

                    </ul>  
                </div>
            })}


          <form onSubmit={gg.addNinja}>
            <input ref="newNinja" placeholder="enter task">
            </input>  
          </form>  


      </div>
    );
  }
}
export default App