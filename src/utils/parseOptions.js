let or = require("./or");

module.exports = function parseOptions(keyvals = {}, args = {}) {
	let options = {};
	let entries = Object.entries(keyvals);
	for (let i = 0; i < Object.keys(keyvals).length; i++) {
		let [key, val] = entries[i];
		options[key] = or(args[key], val);
	}
	return options;
};
