/*
 * Project: TravelDabble 
 * File: Helpers - Support function file
 * Description: It allows us to carry out support operations necessary for the operation of the main functions. 
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

import * as element from './Elements.js'
import * as global from './Globals.js'

export const populationFormatter = function (population) {
	let formattedPopulation;
	if (Number(population) >= 1000000000) {
		formattedPopulation = (Number(population) / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
	} else if (Number(population) >= 1000000) {
		formattedPopulation = (Number(population) / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
	} else if (Number(population) >= 1000) {
		formattedPopulation = (Number(population) / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
	}
	return formattedPopulation;
};

export const destinationSelector = async function () {
	let options = `<option value='SYD'>Select your destination here</option>`;
	for (const [key, value] of Object.entries(global.countryList)) {
		options += `<option value='${key}'>${value}</option>`;
	}
	element.destinationDropdown.innerHTML = options;
};