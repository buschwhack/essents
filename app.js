const http = require("http");
const fs = require('fs');

const host = 'localhost';
const port = 3000;
let movies;

fs.readFile('./movies.json','utf8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    movies = data;

});

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`${movies}`);
};


const server = http.createServer(requestListener);

server.listen(port, host, ()=>{
    console.log(`Go to your browser and visit http://${host}:${port}`);
});

