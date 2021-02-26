'use strict';

/**
 * @description getting nested property of an object
 * @param {object} object 
 * @param {string} properties - path to nested object property
 * @return {*} property value or undefined if it doesn`t exist
 */

const get = (object, properties) => {
	if (typeof object !=='object' || !object || typeof properties !== 'string') {
		return;
	}

	const propertiesList = properties.split('.')
		.filter((value, index) => value.trim().length > 0 && index > 0)
		.map(value => {
			const quotes = ['\'', '"'];
	 		if (quotes.includes(value[0]) && quotes.includes(value[value.length - 1])){
				return value.slice(1, -1);
			}
			return value;
		});

	for (let i = 0; i < propertiesList.length && object !== undefined; i++) {
		object = object[propertiesList[i]];
	}
	return object;
};
