const fs = require("fs");
const path = require("path");
const util = require("util");
const { VioleticsError, request, parseOptions } = require("../utils");

function handleParams(url, args, config, fn) {
	let options = parseOptions(
		{
			...(config && typeof config == "object" ? config : {}),
			...(/\/(tahta)/gi.test(url)
				? {}
				: { img: fs.readFileSync(path.join(__dirname, "../../media/violetics.png")) }),
		},
		args || {}
	);
	if (fn && typeof fn == "function") {
		return request(url, options)
			.then((data) => fn(null, data))
			.catch((error) => fn(error, null));
	}
	return request(url, options);
}

module.exports = function (self) {
	let { BASE, apikey } = self;
	return {
		delete: (image, fn) => handleParams(BASE("delete", apikey), { img: image }, "", fn),
		grayscale: (image, fn) => handleParams(BASE("grayscale", apikey), { img: image }, "", fn),
		invert: (image, fn) => handleParams(BASE("invert", apikey), { img: image }, "", fn),
		circle: (image, fn) => handleParams(BASE("circle", apikey), { img: image }, "", fn),
		sepia: (image, fn) => handleParams(BASE("sepia", apikey), { img: image }, "", fn),
		flip: (image, fn) => handleParams(BASE("flip", apikey), { img: image }, "", fn),
		opaque: (image, fn) => handleParams(BASE("opaque", apikey), { img: image }, "", fn),
		fade: (image, fn) => handleParams(BASE("fade", apikey), { img: image }, "", fn),
		opacity: (image, fn) => handleParams(BASE("opacity", apikey), { img: image }, "", fn),
		contrast: (image, fn) => handleParams(BASE("contrast", apikey), { img: image }, "", fn),
		brightness: (image, fn) => handleParams(BASE("brightness", apikey), { img: image }, "", fn),
		tahta: (text, fn) => handleParams(BASE("tahta", apikey), { text: text }, { text: "Violetics" }, fn),
		blur: (image, pixel, fn) => {
			if (!pixel || typeof pixel == "function")
				throw new VioleticsError("blur() required pixel, received type " + typeof pixel);
			return handleParams(BASE("blur", apikey), { img: image, pixel: pixel }, { pixel: 5 }, fn);
		},
		resize: (image, width, height, fn) => {
			if (!width || typeof width == "function")
				throw new VioleticsError("resize() required width, received value " + util.format(width));
			if (!height || typeof height == "function")
				throw new VioleticsError("resize() required height, received value " + util.format(height));
			return handleParams(
				BASE("resize", apikey),
				{ img: image, width: width, height: height },
				{ width: 50, height: 50 },
				fn
			);
		},
		posterize: (image, level, fn) => {
			if (!level || typeof level == "function")
				throw new VioleticsError("posterize() required level, received type " + typeof level);
			return handleParams(BASE("posterize", apikey), { img: image, level: level }, { level: 5 }, fn);
		},
		pixelate: (image, level, fn) => {
			if (!level || typeof level == "function")
				throw new VioleticsError("pixelate() required level, received type " + typeof level);
			return handleParams(BASE("pixelate", apikey), { img: image, level: level }, { level: 20 }, fn);
		},
		rotate: (image, level, fn) => {
			if (!level || typeof level == "function")
				throw new VioleticsError("rotate() required level, received type " + typeof level);
			return handleParams(BASE("rotate", apikey), { img: image, level: level }, { level: 20 }, fn);
		},
	};
};
