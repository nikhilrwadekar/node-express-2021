const os = require("os"); // Built-in OS module.

// Free RAM available.
const freeRamInMB = os.freemem() / 1024 / 1024;
console.log(`You have ${freeRamInMB} MB of RAM available.`);

// Current uptime
const systemUptimeInSeconds = os.uptime();

setInterval(() => {
    console.log(os.uptime());
}, 1000);
