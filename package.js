const fs = require("fs");
const content = require("./data/content");
const pug = require("pug");

// render and write index file to root dir. Packages 1 index.html only
fs.writeFile(
  "./www/index.html",
  pug.renderFile("./components/app/index.pug", content),
  error => {
    if (error) {
      console.log("Error rendering HTML", error);
    } else {
      console.log("Rendered HTML, check root dir");
    }
  }
);
