const redis = require("redis");
// const client = redis.createClient();
const fs = require("fs");

const ws = fs.createWriteStream("test.txt");
ws.write("line\n");
ws.write("line2");
ws.end();

// client.set("hello", "привет как дела");

// client.get("our", (err, res) => {
//   console.log(res);
//   client.quit();
// });

// let test = "0123456789";
