const readline = require("readline");

const rdl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let encodData = function(datatoencode, finished){
    let enc = Buffer.from(datatoencode).toString('base64');
    finished(enc);  
}

rdl.question("Encode your string data... \n >", function (answer) {
    encodData(answer, (done)=>{
        console.log(`\n >>> encoded string: ${done} \n`);
        process.exit();
    });
});


