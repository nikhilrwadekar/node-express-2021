const { readFile, writeFile } = require("fs");
console.log("Start");
// Sync style. Err, Results. Always! (Ignore: the method; it's a callback hell; just for learning purposes)
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
            console.log("Done with this task.");
          }
        }
      );
    }
  });
});

console.log("Starting next task.."); // sync vs async way for writing files.

// Alternatives:
// using Promises, async await
