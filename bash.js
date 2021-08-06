const exportsFromPwd = require("./pwd");
const ls = require("./ls");
const fs = require('fs');


process.stdout.write("prompt> ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    exportsFromPwd();
  } else if (cmd === "ls") {
    fs.readdir('./', 'utf8', ls);
  }
});
