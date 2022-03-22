const Violetics = require("../src");
let v = new Violetics("beta");

v.tahta("")
    .then(({ type, buffer }) => {
        let { readFileSync, writeFileSync } = require("fs");
        writeFileSync("./media/result." + type.ext, buffer);
        console.log("done");
    })
    .catch(e => console.log(e.error));