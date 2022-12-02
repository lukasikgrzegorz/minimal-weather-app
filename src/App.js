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
		region: data.region,
		today: data.currentConditions,
		nextDays: data.next_days,
	});

	const fetchLocationQuery = async (location) => {
		try {
			const data = await fetchWather(location);
			const mappedData = mapFetchedData(data);
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
				<CurrentWeather data={data}></CurrentWeather>
			</section>
		</main>
	);
};

export default App;
