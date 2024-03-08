const findIndex = require('lodash/findIndex');

var Six = function () {
	return findIndex([1, 5, 7, 1, 2, 6], item => item === 6);
};

module.exports = Six;