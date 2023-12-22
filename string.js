const client = require("./client");

async function init() {
  const result = await client.get("user:1");
  const result2 = await client.get("user:2");
  console.log("Result ->", result, ",", result2);
}

init();
