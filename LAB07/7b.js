const fs = require('fs');
const { argv } = require('process');

if(process.argv.length <= 2)
{
    console.error("Directory not supplied");
    process.exit(1);
}

const directory = argv[2];

if(!fs.existsSync(directory)){
    console.error("Path not found");
    process.exit(1);
}

if(!fs.statSync(process.argv[2]).isDirectory())
{
    console.error("Supplied directory is not a directory")
    process.exit(1);
}

fs.readdir(directory, (err, files) => 
{
    files.forEach(file =>
        {
            fs.watch(`${directory}\\${file}`,
            {
                persistent: true,
                interval: 1000
            },() => 
            {
                console.log(`File '${file}' changed, current content:\n${fs.readFileSync(`${directory}\\${file}`)}`);
            });
        })
});
