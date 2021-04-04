const { readFile, writeFile } = require("fs");

// Sync style. Err, Results. Always!
readFile("./content/subfolder/first.txt", (err, result) => {
  if (err) {
    console.log("Sorry, could not load file.");
  } else {
    console.log("First.txt has been loaded.");
    console.log("File contents:" + result);
  }
});
