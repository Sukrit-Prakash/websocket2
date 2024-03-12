const express = require("express")
const http = require("http")
const path = require('path');
const {Server} = require("socket.io")

const app = express();
//as we have to attach web socket so we cant use app.listen
const server = http.createServer(app);

//creating an instance of io
const io = new Server(server);
io.on('connection',(socket) => {
  console.log("a new user has been connected",socket.id);
socket.on('user-messsage',message =>{
   console.log("a new user message",message) 
})
})

app.use(express.static(path.resolve("./public")));
// static implies that files are unchanged during runtime
app.get('/',(req,res)=>{
    return res.sendFile("/public/index.js")
})
server.listen(9000,()=> console.log(`server started at port 9000`))