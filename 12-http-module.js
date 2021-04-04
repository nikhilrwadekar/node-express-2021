// Not all methods are explained in this course. Please do your due diligence to learn the rest whenever needed.
const http = require("http");

// Express probably uses this under the hood
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Homepage
    res.end("Welcome to our Home Page!");
  } else if (req.url === "/about") {
    // About
    res.end("This is our About Page!");
  } else {
    res.end("Page not found?");
  }

  console.log(req); // This only runs when someone hits the server endpoint!
  //   res.write("Welcome to our Home Page!");
  //   res.end();
});

// Start listening/Start the server (crank it up..!)
server.listen(5000);
