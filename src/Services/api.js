import axios from "axios";

export const fetchWather = async (location) => {
	const response = await axios.get(`https://weatherdbi.herokuapp.com/data/weather/${location}`);
	console.log(response.data);
	return response.data;
};

const api = { fetchWather };

export default api;
