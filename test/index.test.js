const Violetics = require("../src");
let v = new Violetics("beta");

v.blur("https://violetics.pw/assets/avatars/user.png", 3, (err, data) => {
	if (err) return console.log(err);
	let { type, buffer } = data;
	console.log(buffer);
	let { writeFileSync } = require("fs");
	writeFileSync("./media/result." + type.ext, buffer);
	console.log("done");
});
