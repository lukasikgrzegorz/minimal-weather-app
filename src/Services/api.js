import axios from "axios";

const API_KEY = "8eea1ef890a0b65063d666a054a8c554";

export const fetchWather = async (location) => {
	const locationData = await axios.get(
		`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`
	);
	// console.log(locationData);
	const lat = locationData.data[0].lat;
	const lon = locationData.data[0].lon;
	const wheatherData = await axios.get(
		`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	);

	return wheatherData.data;
};

const api = { fetchWather };

export default api;
