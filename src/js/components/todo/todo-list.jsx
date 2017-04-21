import React from 'react';


import Ninja from './todo-item.jsx';


const Ninjas = (props) =>{
return(
	<div>
	  	<h2> todo inside </h2>
				{props.ninjas.map(function(ninja,i) {
				   // return <li key={i}>{name}</li>
				   // return <li>{ninja.name}</li>
				   // <Item name={ninja.name} />
				   // <F2 name={ninja}/>

				   // return <li>{ninja.name}</li>

				   return <Ninja key2={i} ninja={ninja}/>
				})}
				</div>
	)

}

export default Ninjas;