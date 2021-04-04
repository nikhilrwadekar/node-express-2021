const { readFileSync, writeFileSync } = require("fs");
console.log("Start..");
const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8"); // If some user is using the file, node won't be able to serve it for others.

console.log(first);
console.log(second);

// DOES NOT CREATE the file on its own. File has to created already.
writeFileSync(
  "./content/result-sync/third.txt",
  `Hello, programmatically created third text file! ${first} ${second}`,
  { flag: "a" } // Open file for appending, creates it if it does not exist.
);

console.log("Done with this task");
console.log("Starting the next one");
