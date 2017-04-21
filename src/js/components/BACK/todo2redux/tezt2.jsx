import React, { Component } from 'react'
import { connect } from 'react-redux';


class App2 extends Component {
   render() {
      return (
         <div>
         {/*}
         	<button onClick={function(){alert(store.getState())}}> clickww </button>
		*/}
			<button onClick={
				function(){
					store.dispatch(decreaseCreator())	
				}
			}> clickww</button>
         </div>
      )
   }
}

export default connect()(App2);