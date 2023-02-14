const readline = require("readline");

const rdl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let encodData = function(datatoencode){
    let enc = Buffer.from(datatoencode).toString('base64');
    console.log(`\n >>> encoded string: ${enc} \n`);
    readableData(enc);
};

let readableData = function(dataSent){
    let readable = Buffer.from(dataSent, 'base64').toString('utf8');
    console.log(`> encoded string made readble: ${readable} \n`);
};

rdl.question("Encode your string data... \n >", (answer) => {
    encodData(answer);
    
    process.exit();
});



