const fs = require("fs");
console.log("log1");

// const contents = fs.readFile("a.txt", "utf-8");
// console.log(contents);

fs.readFile("b.txt", "utf-8", function (err, data) {
  if (err) {
    console.log("There is a error");
  } else {
    console.log("data:", data);
  }
});

console.log("log2");
