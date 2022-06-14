import  fetch  from 'node-fetch';

const PING_URL = "http://34.145.101.133";

async function checkServer() {
    try {
         await fetch(PING_URL);
        return true
    } catch (e) {
        return false
    }
}

async function run() {
    let serverIsReady = await checkServer()
    if (!serverIsReady) {
        console.log("Server not ready")
        await new Promise(resolve => setTimeout(resolve, 500))
        await run()
    }
    return console.log("We're ready")
};

run();