const client = require("./client");

async function init() {
  // await client.set("message:4", "Hey from nodejs");
  // const result = await client.get("bike:1");
  // const result2 = await client.get("bike:2");
  await client.expire("message:4", 10);
  const message = await client.get("message:4");
  // console.log("Result ->", result, ",", result2);
  console.log(message);
}

init();
