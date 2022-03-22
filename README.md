## Violetics API Jimp

> **Jimp API Wrapper for https://violetics.pw/api/jimp_**

```diff
@@ Created on 22-03-22 | Violetics @@
```

## Installation

<h4>
  using npm package manager
</h4>

> _npm install @violetics/jimp_

<h4>
  using yarn package manager
</h4>

> _yarn add @violetics/jimp_

## Example Request

```javascript
"use strict";
const fs = require("fs");
const Violetics = require("@violetics/jimp");
const v = new Violetics("API_KEY"); // register on https://violetics.pw/ to get your own apikey

/* then, catch */
v.tahta("Violetics")
	.then((data) => {
		let { type, buffer } = data;
		fs.writeFileSync(`./result.${type.ext}`, buffer);
		console.info("done");
	})
	.catch(console.error);

/* callback */
v.tahta("Violetics", (error, data) => {
	if (error) return console.error(error);
	let { type, buffer } = data;
	fs.writeFileSync(`./result.${type.ext}`, buffer);
	console.info("done");
});
```

## Information

```diff
+ dont forget to star <3
! contribute to this project! ~~~
- please add issue if you having problem with installation

! github: https://github.com/Violetics/jimp
```
