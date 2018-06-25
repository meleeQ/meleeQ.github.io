import axios from 'axios';
// import { location } from '../sample/location';
// import { weather } from '../sample/weather';

const CLOUD_FUNCTION_URL = 'https://us-central1-react-beautiful-weather-app.cloudfunctions.net/';

export const getGeocode = (latitude: number, longitude: number, address: string) => {
	const requestUrl = `${CLOUD_FUNCTION_URL}getGeocode?lat=${latitude}&lon=${longitude}&address=` + encodeURIComponent(address);
	console.log(requestUrl);

	// return new Promise(resolve => setTimeout(resolve, 1000, location));
	return axios.get(requestUrl).then(res => {
		return res.data;
	});
};

export const getWeather = (latitude: number, longitude: number, exclude: string, units: string) => {
	const requestUrl = `${CLOUD_FUNCTION_URL}getWeather?lat=${latitude}&lon=${longitude}&exclude=${encodeURIComponent(exclude)}&units=${encodeURIComponent(units)}`;
	console.log(requestUrl);

	// return new Promise(resolve => setTimeout(resolve, 1000, weather));
	return axios.get(requestUrl).then(res => {
		return res.data;
	});
};

export const getForecast = (latitude: number, longitude: number, time: number, exclude: string, units: string) => {
	const requestUrl = `${CLOUD_FUNCTION_URL}getForecast?lat=${latitude}&lon=${longitude}&time=${time}&exclude=${encodeURIComponent(exclude)}&units=${encodeURIComponent(units)}`;
	console.log(requestUrl);

	return axios.get(requestUrl).then(res => {
		return res.data;
	});
};
