/*
 * Project: TravelDabble
 * File: Calculator - Base file of data extraction functions 
 * Description: It allows us to make API calls and extract the necessary data so that the webapp can display the information. 
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

import * as code from './Codes.js'

const positionCalculator = function () {
	return new Promise(function (resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
};

export const origin = async function () {
	try {
		const myPosition = await positionCalculator();
		const { latitude: lat, longitude: lng } = myPosition.coords;

		const responseGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
		const dataGeo = await responseGeo.json();
		if (dataGeo['error']) throw new Error(`
			${code.error.LOCATION_DATA_ERROR}
			(${dataGeo['error']['description']})
		`);

		const responseRest = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
		const dataRest = await responseRest.json();
		if (!responseRest.ok) throw new Error(`
			${code.error.ORIGIN_RESPONSE_ERROR}
			(${dataRest.message})
		`);

		return {
			country: dataGeo.country,
			city: dataGeo.city,
			accuracy: dataGeo.confidence,
			flagSource: dataRest[0].flag,
			currencyCode: dataRest[0].currencies[0]['code']
		}
	} catch (err) { throw err; }
};

export const destination = async function (country) {
	try {
		const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`);
		const data = await response.json();
		if (!response.ok) throw new Error(`
			${code.error.DESTINATION_RESPONSE_ERROR}
			(${data.message})
		`);
		return {
			country: data.name,
			region: data.region,
			subregion: data.subregion,
			capital: data.capital,
			population: data.population,
			callingCode: data.callingCodes[0],
			currencyName: data.currencies[0]['name'],
			currencyCode: data.currencies[0]['code'],
			languageNative: data.languages[0]['nativeName'],
			languageName: data.languages[0]['name'],
			flagSource: data.flag
		}
	} catch (err) { throw err; }

};

export const exchangeRate = async function (originCurrency, destinationCurrency) {
	try {
		const response = await fetch(`https://v6.exchangerate-api.com/v6/f319a0850077d702d1481c14/latest/${destinationCurrency}`);
		if (!response.ok) throw new Error(code.error.EXCHANGE_RESPONSE_ERROR);

		const data = await response.json();
		if (data.result === 'error') throw new Error(`
			${code.error.EXCHANGE_DATA_ERROR} 
			(${data['error-type'].charAt(0).toUpperCase()}${data['error-type'].slice(1)})
		`);

		return {
			conversionRate: data.conversion_rates[`${originCurrency}`],
			lastUpdate: data['time_last_update_utc']
		};
	} catch (err) {
		throw err;
	}
};