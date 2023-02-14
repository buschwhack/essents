// console.log(process.argv);

let getdata = function (flagdata){
    let indexafterflag = process.argv.indexOf(flagdata)+1;
    return process.argv[indexafterflag];
}

let userdata = getdata("--user");
let greetingdata = getdata("--greeting");

// console.log(`Hi ${userdata}, ${greetingdata}.`);

process.stdout.write(`What is your favourite colour? \n\n`);

let answer;

process.stdin.on("data", function(data){
    answer = data.toString();
    process.exit();
});

process.on("exit", function(){
   process.stdout.write(`\n\n Your favourite colour is ${answer} \n\n`);
});