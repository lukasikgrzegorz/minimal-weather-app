import React from "react";

const CurrentWeather = (props) => {
	const { region, today } = props.data;
	let iconType = "";
	if (region) {
		iconType = today.iconURL.split("/");
		iconType = iconType[iconType.length - 1];
	}

	return (
		<>
			<img
				width="200px"
				src={region && `https://ssl.gstatic.com/onebox/weather/256/${iconType}`}
			></img>
			<p>{region}</p>
			<p>{region && today.dayhour}</p>
			<p>{region && today.comment}</p>
			<p>Temp: {region && today.temp.c} °C</p>
			<p>Wind: {region && today.wind.km} KM/H</p>
		</>
	);
};

export default CurrentWeather;
