//load the core Mode.js PATH module
const path = require("path");

console.log("global namespace not required");
global.console.log("but it can still be added is you want.");
let message = "Hello World from Node.js";
console.log(message);
let justNode = message.slice(17);
console.log(`I can't wait to find out about ${justNode}`); 
console.log(__dirname);

let fname = path.basename(__filename);
console.log(`The file name is ${fname}`);

for (let key in global){
    console.log(key);
}