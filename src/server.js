const express = require("express");
const server = express();

server.use(express.static("public"));

// /* Routes */ 
// Ex.:
// server.get("/", (req, res) => {
// 	res.send("Olá")
// })
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point.whtml", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

server.get("/search-results", (req, res) => {
    res.sendFile(__dirname + "/views/search-results.html")
})

// run server
//  package.json 
//
// "scripts": {
//     "start": "node src/server.js"
// },
server.listen(3000)