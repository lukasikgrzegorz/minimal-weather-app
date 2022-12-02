import React from "react";


const Serachbar = ({ onChangeHandler }) => {
	return (
		<div>
			<input type="text" name="location" onChange={onChangeHandler}></input>
		</div>
	);
};

export default Serachbar;
