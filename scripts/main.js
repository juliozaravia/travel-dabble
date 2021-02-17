/*
 * Project: TravelDabble
 * File: Main - Event control file
 * Description: It allows us to call the functions that are in charge of executing the operations, API calls, error handling and notification printing. 
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

'use strict'

import * as element from './modules/Elements.js'
import * as helper from './modules/Helpers.js'
import * as code from './modules/Codes.js'
import * as calculator from './modules/Calculators.js'
import * as loader from './modules/Loaders.js'
import * as notifier from './modules/Notifiers.js'

(async function () {
	let origin;
	try {
		origin = await calculator.origin();
		await loader.origin(origin);
		await helper.destinationSelector();
		await notifier.status(code.status.OK);
	} catch (err) {
		await notifier.status(code.status.ERROR, err.message);
	} finally {
		loader.ui();
	}

	element.destinationAction.addEventListener('click', function (event) {
		event.preventDefault();
		let countryAlphaCode = element.destinationDropdown.options[element.destinationDropdown.selectedIndex].value;

		(async function () {
			let destination;
			try {
				destination = await calculator.destination(countryAlphaCode);
				const exchange = await calculator.exchangeRate(origin.currencyCode, destination.currencyCode);
				await loader.destination(destination);
				await loader.exchangeRate(origin.currencyCode, destination.currencyCode, exchange);
			} catch (err) {
				await notifier.status(code.status.ERROR, err.message);
			}
		})();
	});
})();










