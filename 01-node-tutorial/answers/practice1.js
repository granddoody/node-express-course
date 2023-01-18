
//require practice2.js module 
const mySentence = require("./practice2")

//require fs and os modules 
const os = require('os')
const { writeFile } = require('fs')

//create variable to store username 
const user = os.userInfo().username;

//asynchronously create practice.txt file

writeFile("./content/practice.txt", `${mySentence} ${user}`, "utf8", (err) => {
    if(err){
        console.log(err)
    }
    console.log("file successfully created!")
})




