const fs = require("fs");
const path = require("path");
const { request, parseOptions } = require("../../utils");

module.exports = function handleParams_1(url, args = {}, config = "") {
	let options = parseOptions(
		config || {
			img: fs.readFileSync(path.join(__dirname, "../../../media/violetics.png")),
		},
		args
	);
	return request(url, options);
};
