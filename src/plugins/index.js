const fs = require("fs");
const dirs = fs.readdirSync(__dirname);

for (var dir of dirs) {
	let stats = fs.statSync(`${__dirname}/${dir}`);
	if (!stats.isDirectory()) continue;
	let plugins = fs.readdirSync(`${__dirname}/${dir}`).map((x) => /\.js/.test(x) ? x.split(".js")[0] : x);
	for (var plugin of plugins) {
	    if (plugin != "index") continue;
	    console.log(plugin);
	}
}
