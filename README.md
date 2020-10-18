# Trick-cord-Treat-Sniper
A sniper self-bot for Trick'cord Treat Sniper

# Description
It correctly says h!treat or h!trick in the targetted servers

# Usage
1. Download all of the needed dependencies by doing `npm i`
2. Edit the `config.json` file and input your Discord Token and the servers you want to target
3. Run index.js by doing `node index.js`

# Infomation in the config.json file

## LoginToken
Here you insert your Discord Token, https://www.youtube.com/watch?v=xuB1WQVM3R8

## targetServer
This is an array of all of the servers you want to monitor, you may add or remove to it. https://www.youtube.com/watch?v=RI3_Z0AEMck

## SleepTimer
This is how long it waits until it sends either h!treat or h!trick, you may configure this further. (It's in milliseconds)

### min
Minimum time to wait until the message is sent.

### max
Maximum time to wait until the message is sent.