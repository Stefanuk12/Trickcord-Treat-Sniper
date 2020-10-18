// Requires
const Eris = require('eris');
const config = require('./config.json');

// Setting up
const client = new Eris(config.LoginToken);

// Sleep function
async function sleep(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

// On ready
client.once("connect", () => {
    console.log(`[+] Sniper is up | ${new Date()}`);
});

// On Message
client.on("messageCreate", async function(message){
    // try/catch to remove the warnings from console
    try {
        // Check if it's a message from the bot
        if (message.author.id !== '755580145078632508') return;

        // Check if it's within one of the targetted servers
        if (config.targetServer.indexOf(message.guildID) === -1) return;

        // Checking if we have the correct message
        var stoppedBy = true;
        message.embeds.forEach(embed => {
            if (embed.title !== 'A trick-or-treater has stopped by!'){
                stoppedBy = false;
            };
        });
        if (!stoppedBy) return;

        // Checking which one to say
        var trick = (message.embeds[0].description.indexOf("h!trick", 0) !== -1);

        // Saying it
        const sleepTime = Math.floor(Math.random() * (config.SleepTimer.max - config.SleepTimer.min) + config.SleepTimer.min); // Seeing how long to wait before sending the message
        await sleep(sleepTime); // Waiting the slowdown

        // Checking if it's trick or treat to say
        if (trick){
            client.createMessage(message.channel.id, "h!trick");
        } else {
            client.createMessage(message.channel.id, "h!treat");
        };

        console.log(`[+] Sniped | Server: ${message.guildID} | ${new Date()}`)

        // Return
        return trick;
    } catch {
        return;
    };
});

// Login
client.connect();
