'use strict';

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
