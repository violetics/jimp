const isUrl = require("./isUrl");
const VioleticsError = require("./VioleticsError");
let axios = require("axios");
let FormData = require("form-data");
let FileType = require("file-type");

module.exports = function sendRequest(url, options) {
	let bodyForm = new FormData();
	Object.entries(options).map(([name, value]) => {
		if (!Buffer.isBuffer(value) && !isUrl(value)) {
			bodyForm.append(name, value);
		} else if (isUrl(value) && name.includes("img")) {
			bodyForm.append(name, encodeURIComponent(value));
		} else if (Buffer.isBuffer(value) && name.includes("img")) {
			bodyForm.append(name, Buffer.from(value, "binary"), {
				filename: `${name}-module.png`,
			});
		}
	});
	let hasMedia = bodyForm._streams.filter((x) => /content-type.+/gi.test(x))[0];
	return new Promise((resolve, reject) => {
		axios({
			url: url,
			...(hasMedia ? { data: bodyForm.getBuffer(), method: "POST" } : { params: options, method: "GET" }),
			responseType: "arraybuffer",
			headers: {
				...bodyForm.getHeaders(),
			},
		})
			.then(async (response) => {
				let type = await FileType.fromBuffer(response.data);
				resolve({
					type: type,
					buffer: response.data,
				});
			})
			.catch((error) => {
				if (error.hasOwnProperty("response")) {
					if (error.response && error.response.hasOwnProperty("data")) {
						let data = JSON.parse(error.response.data.toString());
						return reject(new VioleticsError(data, "ApiError"));
					} else {
						return reject(new VioleticsError(error.message, error.name));
					}
				} else {
					return reject(new VioleticsError(error.message, error.name));
				}
			});
	});
};
