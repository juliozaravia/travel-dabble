/*
 * Project: TravelDabble
 * File: Elements - Element extraction file
 * Description: It allows us to extract the elements from the DOM and store them in containers that will be processed as required. 
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

export const container = document.querySelector('.container');
export const loader = document.querySelector('.loader');

export const originCountry = document.querySelector('.origin-country');
export const originCity = document.querySelector('.origin-city');
export const originAccuracy = document.querySelector('.origin-accuracy');
export const originFlag = document.querySelector('.origin-flag');

export const destinationDropdown = document.querySelector('#destination-selector');
export const destinationCountry = document.querySelector('.destination-country');
export const destinationRegion = document.querySelector('.destination-region');
export const destinationCapital = document.querySelector('.destination-capital');
export const destinationPopulation = document.querySelector('.destination-population');
export const destinationCallingCode = document.querySelector('.destination-calling-code');
export const destinationCurrency = document.querySelector('.destination-currency');
export const destinationLanguage = document.querySelector('.destination-language');
export const destinationExchangeRate = document.querySelector('.destination-exchange-rate');
export const destinationExchangeRateDate = document.querySelector('.destination-exchange-rate-date');
export const destinationFlag = document.querySelector('.destination-flag');
export const destinationAction = document.querySelector('.search__button');

export const statusInformation = document.querySelector('.status');