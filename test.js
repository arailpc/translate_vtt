const redis = require("redis");
const client = redis.createClient();

// client.set("hello", "привет как дела");

client.get("our", (err, res) => {
  console.log(res);
  client.quit();
});
