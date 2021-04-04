const {
    readFileSync,
    writeFileSync
} = require("fs");

const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");

console.log(first);
console.log(second);

// DOES NOT CREATE the file on its own. File has to created already.
writeFileSync(
    "./content/result-sync/third.txt",
    `Hello, programmatically created third text file! ${first} ${second}`
);