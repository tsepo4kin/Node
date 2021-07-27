const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./docs/text.txt");
const writeStream = fs.createWriteStream("./docs/writeStream.txt");
const compressStream = zlib.createGzip();

// readStream.on("data", (chunk) => {
//   writeStream.write("\n ---- chunk start ---- \n");
//   writeStream.write(chunk);
//   writeStream.write("\n ---- chunk end ---- \n");
// });

const handleErr = () => {
  console.log("Error");
  readStream.destroy();
  writeStream.end("Finished with error ...");
};

readStream
  .on("error", handleErr)
  .pipe(compressStream)
  .pipe(writeStream)
  .on("error", handleErr);
