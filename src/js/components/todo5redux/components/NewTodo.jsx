import React from "react";

const NewTodo = ({onChange}) => (
	<div>
		<h3> New </h3>
		<form>
			<input type="text" onKeyUp={onChange} />
		</form>	
		<div className="clearfix"></div>
	</div>
)

export default NewTodo