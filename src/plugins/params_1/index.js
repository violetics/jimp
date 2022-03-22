let handleParams_1 = require("./handleParams_1");

module.exports = function (self) {
	let { BASE, apikey } = self;
	return {
		delete: (image) => handleParams_1(BASE("sepia", apikey), { img: image }),
		grayscale: (image) => handleParams_1(BASE("grayscale", apikey), { img: image }),
		invert: (image) => handleParams_1(BASE("invert", apikey), { img: image }),
		circle: (image) => handleParams_1(BASE("circle", apikey), { img: image }),
		sepia: (image) => handleParams_1(BASE("sepia", apikey), { img: image }),
		flip: (image) => handleParams_1(BASE("flip", apikey), { img: image }),
		opaque: (image) => handleParams_1(BASE("opaque", apikey), { img: image }),
		fade: (image) => handleParams_1(BASE("fade", apikey), { img: image }),
		opacity: (image) => handleParams_1(BASE("opacity", apikey), { img: image }),
		contrast: (image) => handleParams_1(BASE("contrast", apikey), { img: image }),
		brightness: (image) => handleParams_1(BASE("brightness", apikey), { img: image }),
		tahta: (text) => handleParams_1(BASE("tahta", apikey), { text: text }, { text: "Violetics" }),
	};
};
