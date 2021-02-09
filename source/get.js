'use strict';

/**
 * @description getting nested property of an object
 * @param {object} object 
 * @param {string} properties - path to nested object property
 * @return {object|undefined} property value or undefined if it doesn`t exist
 */

const get = (object, properties) => {
	if (typeof object !=='object' || !object || typeof properties !== 'string') {
		return;
	}

	let propertiesList = properties.match(/(\.\w+)/g);
	if (!propertiesList) {
		return object;
	}
	propertiesList = propertiesList.map((str) => str.slice(1));

	for (let i = 0; i < propertiesList.length && object !== undefined; i++) {
		object = object[propertiesList[i]];
	}
	return object;
};
