const fs = require("fs");
fs.readFile("C:\\Web Development\\2.2 Native Modules\\message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content is: ", data);
});
