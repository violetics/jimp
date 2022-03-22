const { name, version } = require("../package.json");
const utils = require("./utils");
const { VioleticsError } = utils;

class Violetics {
	constructor(apikey) {
		if (!apikey || typeof apikey != "string")
			throw new VioleticsError("arguments 'apikey' must be typeof string and required!");
		this.name = name;
		this.version = version;
		this.utils = utils;
		this.plugins = require("./plugins");
		this.apikey = apikey;
	}
	BASE(path, apikey) {
		return `https://violetics.pw/api/jimp/${path}?apikey=${apikey}`;
	}
}

console.log(new Violetics("ajaja"));

module.exports = Violetics;
