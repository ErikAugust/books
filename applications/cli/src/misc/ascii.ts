const { promisify } = require('util');
const figlet = require('figlet');

export async function displayAsciiArt(text: string) {
    const figletPromise = promisify(figlet);
    return console.log(await figletPromise(text));
}