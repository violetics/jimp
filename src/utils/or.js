module.exports = function or() {
	for (let arg of arguments) {
		if (arg) {
			return arg;
		}
	}
	return arguments[arguments.length - 1];
};
