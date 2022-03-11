const fs = require('fs');
const url = require('url');
const http = require('http');

const home = fs.writeFileSync('./home.txt', 'Hi, Welcome to my page');
const more = fs.appendFileSync('./home.txt', '\n my name is sophia, and i am learning Node.js')
console.log(home);
const about = fs.readFileSync('./about.txt', 'utf-8');
const about1 = fs.readFile('./about.txt', 'utf-8', (err, data) => {

    console.log(data);
});
console.log(about);