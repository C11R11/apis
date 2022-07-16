import {join} from "path"
import {readdir, readdirSync, readFileSync, writeFileSync} from "fs"

const directoryPath = join(__dirname, "..",'data_store', 'collection_results');
let result:Array<object> = [];

const files = readdirSync(directoryPath, { withFileTypes: true });

files.forEach(function (file) {
    const fileJson:object = {fileName:file}
    //result.push(fileJson)
    const filepath = join(directoryPath, file.name)

    let resumeJsonRawdata, resumeInfoJson

    try {
        resumeJsonRawdata = readFileSync(filepath , 'utf8');
        resumeInfoJson = JSON.parse(resumeJsonRawdata);
      } catch (err:any) {
        if (err.code === "ENOENT") {
          console.log("No collection result data");
          process.exit(0);
        } else {
          throw err;
        }}

    // Do whatever you want to do with the file
    console.log(file); 
    result.push(resumeInfoJson)

    var json = JSON.stringify(result);
    console.log("looging", json);
    writeFileSync("csacsacsults.json", json);
});

console.log(result)