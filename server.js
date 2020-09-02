var request = require("request")
async function iife1() {
  console.log("Waiting for response from Code Connection...")
  /*
  let connected = await request("http://localhost:8080/connected")
  if(connected.body.includes("true")) {
    console.log("Connected!")
  } else {
    console.log("Unable to connect.")
    return
  }
  */
  await request("http://localhost:8080/move?direction=forward")
  await request("http://localhost:8080/move?direction=forward")
  await request("http://localhost:8080/move?direction=back")
  await request("http://localhost:8080/turn?direction=left")
  await request("http://localhost:8080/turn?direction=right")
}
iife1()
