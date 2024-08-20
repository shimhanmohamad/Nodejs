const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'files' ,'start.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.writeFile(path.join(__dirname, 'files', "new.txt"), 'Hello every one',
  (err) => {
  if (err) throw err;
  console.log('Write completed');
  fs.appendFile(
    path.join(__dirname, "files", "new.txt"),
    "\nI am shimhan from UCSC",
    (err) => {
      if (err) throw err;
      console.log("append completed");
    }
      )
       fs.rename(
         path.join(__dirname, "files", "new.txt"),path.join(__dirname, "files", "newline.txt"),
         (err) => {
           if (err) throw err;
           console.log("rename completed");
         }
       );
      
});

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error :${err}`);
  process.exit(1);
});
