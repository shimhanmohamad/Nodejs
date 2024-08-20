const fs = require('fs')
const path = require('path')

const folderpath = path.join(__dirname, "Newfolder", "FileSystem");
if (!fs.existsSync(folderpath)) { /// check  if folder 'new' is already exist or not
    fs.mkdir(folderpath, { recursive: true }, (err) => {
      if (err) throw err;
      console.log("Directory created");
    });
}

if (fs.existsSync('./folder')) {
    fs.rmdir('./folder', (err) => {
        if (err) throw err
        console.log("Remove folder")
    })
}


process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error :${err}`);
  process.exit(1);
});