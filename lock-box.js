const prompt = require('prompt-sync')({sigint: true})

let pinCode = '420'
let entry = prompt("Enter code: ")

if(entry === pinCode){
    console.log("Success")
}
else(console.log("Failure"))
