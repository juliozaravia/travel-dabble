/*
 * Project: TravelDabble 
 * File: Notifier - Communications management file  
 * Description: It allows us to show notifications to the user according to the operations carried out.  
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

import * as code from './Codes.js'
import * as element from './Elements.js'

export const status = async function (statusCode, message = '') {
	switch (statusCode) {
		case code.status.OK:
			element.statusInformation.classList.remove('status--disable');
			element.statusInformation.classList.add('status--ok');
			element.statusInformation.textContent = `STATUS <${Object.keys(code.status)[0]}> ${Object.values(code.status)[0]}`;
			break;
		case code.status.ERROR:
			if (!element.statusInformation.classList.remove('status--disable')) {
				element.statusInformation.classList.remove('status--ok');
			}
			element.statusInformation.classList.add('status--error');
			element.statusInformation.textContent = `STATUS <${Object.keys(code.status)[1]}> ${Object.values(code.status)[1]}: ${message}`;
			break;
		default:
			break;
	}
};