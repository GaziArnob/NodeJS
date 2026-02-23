 const path = require("path");

 const filePath = "D:\Node Js\files\sample.txt";

// //dirname
// console.log(path.dirname(filePath));
// console.log(__dirname);
// //basename 
// console.log(path.basename(filePath));
// console.log(__filename);
// //extension
// console.log(path.extname(filePath));

const samplePath = "sample.txt";

//console.log(path.join(path.dirname(filePath), samplePath));

 const fs = require("fs");

// // reading file

//  fs.readFile(filePath, "utf-8", (err, data) => {
//      if (err) throw new Error("Error reading file: ");
//      console.log("File content: ", data);
//      }); 

const fsPromise = require("fs").promises;

// const filereading = async () => {
//     try {
//         const data = await fsPromise.readFile(filePath, "utf-8");
//         console.log("File content: ", data);
//     } catch (err) {
//         console.error("Error reading file: ", err);
//     }
// };

//filereading();
 const writepath =path.join(__dirname, "files", "text.txt");
 const constant  = "This is a text file created using fs module in node js";
//   fs.writeFile(writepath, constant, (err) => {  
//       if (err) throw new Error("Error writing file: ");
//       console.log("Write operation completed successfully");
//       fs.readFile(writepath, "utf-8", (err, data) => {
//           if (err) throw new Error("Error reading file: ");
//           console.log("File content: ", data);
//       });
//      }); 

     const writingInFile = async () => {
        try{
             await fsPromise.writeFile(writepath, constant);
        await fsPromise.appendFile(writepath, "\nThis is an appended text");
        const data = fsPromise.readFile(writepath);
        console.log("File content: ", data);

        } catch (err) {
            console.error("Error writing file: ", err);
        }
    };

    writingInFile();
       





