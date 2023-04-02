const Arith = require("./Mod1");
const fs = require("fs");

console.log(Arith.sum(3, 5), Arith.diff(3, 5));
var a = fs.readFile("demo.txt","utf-8" ,(err,res)=>{
    console.log(res);

})
