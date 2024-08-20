const fs = require("fs");
const path = require("path");

fs.writeFile(path.join(__dirname, 'files', 'write.txt'), 'Hi i am shimhan', (err) => {
    if (err) throw err;
    console.log('write completed')
    fs.appendFile(
      path.join(__dirname, "files", "write.txt"),
      "\n\nI am from Eheliyagoda",
      (err) => {
        if (err) throw err;
        console.log("append1 completed");
      }
    );
});

fs.appendFile(path.join(__dirname, 'files', 'write2.txt'), 'I do my degree in UCSC', (err) => {
    if (err) throw err;
    console.log('append2 completed')
    fs.rename(
      path.join(__dirname, "files", "write2.txt"),
      path.join(__dirname, "files", "renamefile.txt"),
      (err) => {
        if (err) throw err;
        console.log("rename completed");
      }
    );
});

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error : ${err}`);
  process.exit(1);
});