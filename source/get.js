'use strict';

const get = (object, properties) => {
	if (properties == null || object == null) {
		return;
	}
	let propertiesList = properties.match(/(\.\w+)/g);
	if (propertiesList === null) {
		return object;
	}
	propertiesList = propertiesList.map((str) => str.slice(1));
	let result = object;
	for (let i = 0; i < propertiesList.length && result !== undefined; i++) {
		result = result[propertiesList[i]];
	}
	return result;
};
