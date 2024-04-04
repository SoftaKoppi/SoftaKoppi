const { PurgeCSS } = require("purgecss");
const fs = require("fs");

async function runPurgeCSS() {
  const results = await new PurgeCSS().purge("./purgecss.config.js");
  results.forEach((result) => {
    const { css, file } = result;
    fs.writeFileSync(file, css);
  });
}

runPurgeCSS();