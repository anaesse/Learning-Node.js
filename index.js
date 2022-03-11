const fs = require('fs');
const url = require('url');
const http = require('http');
const { restart } = require('nodemon');

const home = fs.writeFileSync('./home.txt', 'Hi, Welcome to my page');
const more = fs.appendFileSync('./home.txt', '\n my name is sophia, and i am learning Node.js')
console.log(home);
const about = fs.readFileSync('./about.txt', 'utf-8');
const home1 = fs.readFileSync('./home.txt', 'utf-8');
const test = fs.readFileSync('./test.txt', 'utf-8');
const about1 = fs.readFile('./about.txt', 'utf-8', (err, data) => {

    console.log(data);
});
console.log(about);

const webServer = http.createServer((req, res) => {
    let estherr = req.url;
    if(estherr === '/' || estherr === '/home'){
        res.end(home1);
    }
    else if ( estherr === '/about'){
        res.end(about);
    }
    else if ( estherr === '/test'){
        res.end(test);
    }
    else{
        res.writeHead(404,{
            'content-type': 'text/html'
        })
        res.end('<h3>Page Don Lost</h3>')
    }
}).listen(3000, () => {
    console.log('listening at port 3000');
})