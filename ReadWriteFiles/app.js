const fs = require("fs");

fs.readFile("./test.txt", (err, data) => {
  console.log(data.toString());

  fs.mkdir("./copyFiles", () => {
    console.log("Folder copyFiles created!");

    fs.writeFile("./copyFiles/testCopy.txt", `Copy file. ${data}`, () => {
      console.log("File testCopy created!");
    });
  });
});

setTimeout(() => {
  if (fs.existsSync("./copyFiles/testCopy.txt")) {
    fs.unlink("./copyFiles/testCopy.txt", () => {
      console.log("File testCopy deleted!");
    });
  }
}, 5000);

setTimeout(() => {
  if ("./copyFiles") {
    fs.rmdir("./copyFiles", () => {
      console.log("Folder copyFiles deleted!");
    });
  }
}, 10000);
