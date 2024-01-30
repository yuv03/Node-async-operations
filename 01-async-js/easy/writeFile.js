const fs = require('fs');

fs.writeFile('a.txt', "I am writing to this file", (err)=>{
    console.log(err);
})

