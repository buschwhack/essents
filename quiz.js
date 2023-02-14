
let strdata = [
    {
        question: "What is the capital city of France?",
        answer: "paris",
        score: 1
    },
    {
        question: "Which is the largest island in the world?",
        answer: "greenland",
        score: 3,
    },
    {
        question: "Which is the largest desert in the world?",
        answer: "sahara",
        score: 2
    }
];

let answers=[];
let curr = 0;
let uscore = 0;

let quiz = function(){
    process.stdout.write(`\n\n ${strdata[curr].question}\n > `);
};

quiz();

process.stdin.on("data", function(data){
    let usera = data.toString().trim().toLowerCase();
    answers.push(usera);
    if(strdata[curr].answer == usera){
        uscore += strdata[curr].score;
    }
    curr++;
    if(curr < strdata.length){
        quiz();
    }else{
      process.exit(); 
    }
});

process.on("exit", function(){
    answers.forEach(function(ans, i) {
       process.stdout.write(`\n ${strdata[i].question} ::: Your answer::: ${ans}`); 
    });
    
    if(uscore == 6){
       process.stdout.write(`\n :::: TOP MARKS 6 / 6 :::: \n`);  
    }else{
        process.stdout.write(`\nYour score is :::: ${uscore} / 6. \n`);  
    }
 });