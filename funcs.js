
let mywelcome = (nameData) => {
    console.log(`\n Welcome ${nameData} \n`);
};

mywelcome("Elaine");


let nextuser = (myW, nextname) => {
    myW(nextname);
};

nextuser(mywelcome, "Tom Hanks");
