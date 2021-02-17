/*
 * Project: TravelDabble 
 * File: Codes - Support resource file.
 * Description: It allows us to have globally available all the codes necessary to show notifications to the user. 
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

export const error = Object.freeze({
	LOCATION_DATA_ERROR: 'Error while fetching the location data',
	ORIGIN_RESPONSE_ERROR: 'Error while fetching the origin country data',
	DESTINATION_RESPONSE_ERROR: 'Error while fetching the destination country data',
	EXCHANGE_RESPONSE_ERROR: 'Error while fetching the exchange rate data',
	EXCHANGE_DATA_ERROR: 'Error while parsing the exchange rate data',
});

export const status = Object.freeze({
	OK: 'All services working',
	ERROR: 'Description',
});