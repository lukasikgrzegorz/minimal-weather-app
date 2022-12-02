import React from "react";
import css from "./CurrentWeather.module.css";

const CurrentWeather = (props) => {
	const { city, wheather, temp } = props.data;
	console.log(props);

	return (
		<>
			<img src={`http://openweathermap.org/img/wn/${wheather[0].icon}@2x.png`}></img>
			<h3>{city}</h3>
			<h2 className={css["temp-header"]}>{Math.round(temp.temp)}° </h2>
		</>
	);
};

export default CurrentWeather;
