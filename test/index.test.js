const { writeFileSync, readFileSync } = require("fs");
const Violetics = require("../src");
let v = new Violetics("beta");

v.rotate(readFileSync("./media/violetics.png"), 20, (err, data) => {
	if (err) return console.log(err);
	let { type, buffer } = data;
	console.log(buffer);
	writeFileSync("./media/result." + type.ext, buffer);
	console.log("done");
});
