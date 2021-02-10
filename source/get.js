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

	let propertiesList = properties.split('.');
	propertiesList = propertiesList.filter((value, index, array) => value.trim().length > 0)

	for (let i = 0; i < propertiesList.length && object !== undefined; i++) {
		object = object[propertiesList[i]];
	}
	return object;
};
