const exportsFromPwd = require("./pwd");
const ls = require("./ls");
const fs = require('fs');
const cat = require('./cat');
// const { findSourceMap } = require("module");


process.stdout.write("prompt> ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    exportsFromPwd();
  } else if (cmd === "ls") {
    fs.readdir('./', 'utf8', ls);
  }
  else if(cmd.includes('cat')){
    let file = cmd.split(' ')[1];
    console.log(file);
    // fs.readFile(file, cat)
  }
});
