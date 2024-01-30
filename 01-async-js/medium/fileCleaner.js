const fs = require('fs')


fs.readFile('a1.txt', 'utf-8', (err, data)=>{
    data = data.replace(/\s+/g, ' ').trim();;
    console.log(data);
})