import { useEffect, useState } from "react";
import { fetchWather } from "./Services/api";
import _debounce from "lodash.debounce";
import Serachbar from "./Components/Searchbar/Searchbar";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import "./App.css";

const App = () => {
	const [location, setLocation] = useState("");
	const [data, setData] = useState({});

	const setLocationQuery = (e) => {
		setLocation(e.target.value);
	};

	const mapFetchedData = (data) => ({
		city: data.city.name,
		temp: data.list[0].main,
		wheather: data.list[0].weather,
	});

	const fetchLocationQuery = async (location) => {
		try {
			const data = await fetchWather(location);
			const mappedData = mapFetchedData(data);
			// console.log(mappedData);
			setData((oldData) => ({
				...oldData,
				...mappedData,
			}));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (location.length > 0 && location !== "") {
			fetchLocationQuery(location);
		}
	}, [location]);

	return (
		<main>
			<section>
				<Serachbar onChangeHandler={_debounce(setLocationQuery, 600)}></Serachbar>
				{data.city && <CurrentWeather data={data}></CurrentWeather>}
			</section>
		</main>
	);
};

export default App;
