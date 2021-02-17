/*
 * Project: TravelDabble
 * File: Loader - Data upload file 
 * Description: It allows us to load the data extracted by the calculating functions in the webapp interface. 
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

import * as element from './Elements.js'
import * as helper from './Helpers.js'

export const ui = function () {
	element.loader.classList.remove('show');
	element.loader.classList.add('hide');
	element.container.classList.remove('hide');
	element.container.classList.add('show');
};

export const exchangeRate = async function (originCurrency, destinationCurrency, exchange) {
	element.destinationExchangeRate.textContent = `1 ${destinationCurrency} = ${exchange.conversionRate} ${originCurrency}`;
	element.destinationExchangeRateDate.textContent = exchange.lastUpdate;
};

export const destination = async function (destination) {
	let formattedPopulation = helper.populationFormatter(destination.population);
	element.destinationCountry.textContent = destination.country ? destination.country : 'No data';
	element.destinationRegion.textContent = `${destination.subregion ? destination.subregion : 'No data'} - ${destination.region ? destination.region : 'No data'}`
	element.destinationCapital.textContent = destination.capital ? destination.capital : 'No data';
	element.destinationPopulation.textContent = formattedPopulation ? formattedPopulation : 'No data';
	element.destinationCallingCode.textContent = destination.callingCode ? `+${destination.callingCode}` : 'No data';
	element.destinationCurrency.textContent = `${destination.currencyCode ? destination.currencyCode : 'No data'} - ${destination.currencyName ? destination.currencyName : 'No data'}`;
	element.destinationLanguage.textContent = `${destination.languageNative ? destination.languageNative : 'No data'} - ${destination.languageName ? destination.languageName : 'No data'}`;
	element.destinationFlag.src = destination.flagSource ? destination.flagSource : 'No data';
	element.destinationFlag.alt = `${destination.country ? destination.country : 'No data'} - ${destination.region ? destination.region : 'No data'}`;
};

export const origin = async function (origin) {
	element.originCountry.textContent = origin.country;
	element.originCity.textContent = origin.city;
	element.originAccuracy.textContent = `${origin.accuracy * 100}% accuracy`;
	element.originFlag.src = origin.flagSource;
	element.originFlag.alt = `${origin.city} - ${origin.country}`;
};