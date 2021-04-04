const os = require("os"); // Built-in OS module.

// Free RAM available.
const freeRamInMB = os.freemem() / 1024 / 1024;
console.log(`You have ${freeRamInMB} MB of RAM available.`);

// Current uptime
const systemUptimeInSeconds = os.uptime(); // Avoiding this as this assigns one value and understandly so does not update the variable. (Isn't reactive, xD)

// Helper display function
const formatTimeAsString = (number, unit) => {
    return `${number} ${unit}`;
}

// Print System uptime every second
setInterval(() => {
    const uptimeSeconds = os.uptime();
    const hours = parseInt(uptimeSeconds/60/60);
    const minutes = parseInt(uptimeSeconds/60%60);
    const seconds = uptimeSeconds%60;

    let output = "";

    if(hours) {
        output += formatTimeAsString(hours, "hours");
    }

    if(minutes) {
        output += " ";
        output += formatTimeAsString(minutes, "minutes");
    }

    if(seconds) {
        output += " ";
        output += formatTimeAsString(seconds, "seconds");
    }

    console.log(output);
}, 1000);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);