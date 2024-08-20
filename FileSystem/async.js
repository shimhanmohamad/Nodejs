const path = require('path')
const fsPromises = require('fs').promises

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'start.txt'), 'utf8')
        console.log(data)

        await fsPromises.writeFile(path.join(__dirname, 'files','test.txt' ),"Hello day after tomaorrow tuesday")
        console.log("write commpled")

        await fsPromises.appendFile(path.join(__dirname, 'files', 'test.txt'), '\n\n  I will come to Home')
        console.log('Append completed')

        await fsPromises.rename(path.join(__dirname, "files", "test.txt"), path.join(__dirname, 'files', 'testdemo.txt'));
        console.log('rename completed')
        
        await fsPromises.unlink(path.join(__dirname, 'files', 'start.txt'))
        console.log('delete completed')
        
    }
    catch (err) {
        console.error(err)
    }
}

fileOps()