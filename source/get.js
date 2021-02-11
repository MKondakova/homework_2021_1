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
	propertiesList.shift();
	propertiesList = propertiesList.filter(value => value.trim().length > 0);

	propertiesList = propertiesList.map(value => {
	 	if (value[0] ==='\'' && value[value.length - 1]==='\''){
			 return value.slice(1, -1);
		 }
		 return value;
	 })

	for (let i = 0; i < propertiesList.length && object !== undefined; i++) {
		object = object[propertiesList[i]];
	}
	return object;
};
