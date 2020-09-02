var request = require("request")
(async function() {
  console.log("Waiting for response from Code Connection...")
  let connected = await request("localhost:8080/connected")
  if(connected.body === "true") {
    console.log("Connected!")
  } else {
    console.log("Unable to connect.")
    return
  }
  await request("localhost:8080/move?direction=forward")
  await request("localhost:8080/move?direction=forward")
  await request("localhost:8080/move?direction=back")
  await request("localhost:8080/turn?direction=left")
  await request("localhost:8080/turn?direction=right")
})()
