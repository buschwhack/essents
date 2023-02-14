
const fs = require('fs');

fs.readFile('./movies.json','utf8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    let movies = JSON.parse(data);
    display(movies);

});

let display = (datamovies) =>{

    datamovies.forEach(element => {
        console.log(`TITLE >>> ${element.title}`);
        let actors = element.cast;
        actors.forEach(actor => { 
            console.log(`${actor}`);
        });
        console.log("\n");
    });

};