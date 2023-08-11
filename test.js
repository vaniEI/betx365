const express = require("express");
  
// Creates an express object
const app = express();
  
// It listens to HTTP get request. 
// Here it listens to the root i.e '/'
app.get("/", (req, res) => {
  
  // Using send function we send
  // response to the client
  // Here we are sending html
  res.send("<h1> Hello World </h1>");
});
  
// It configures the system to listen
// to port 3000. Any number can be 
// given instead of 3000, the only
// condition is that no other server
// should be running at that port
app.listen(3001, () => {
  
  // Print in the console when the
  // servers starts to listen on 3000
  console.log("Listening to port 3000");
});
