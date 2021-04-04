const { readFile, writeFile } = require("fs");

// Sync style. Err, Results. Always!
readFile("./content/subfolder/first.txt", (err, result) => {
  if (err) {
    console.log("Sorry, could not load file.");
  } else {
    console.log("First.txt has been loaded.");
    console.log("File contents:" + result);
  }

  const first = result;

  readFile("./content/subfolder/second.txt", (err, result) => {
    if (err) {
      console.log("Sorry, could not load file.");
    } else {
      console.log("Second.txt has been loaded.");
      console.log("File contents:" + result);

      const second = result;
      writeFile(
        "./content/result-async/third.txt",
        "Here is the third file!",
        (err, result) => {
          if (err) {
            console.log("Something went wrong with the callback hell.");
          } else {
            console.log("Third file was created.");
          }
        }
      );
    }
  });
});
