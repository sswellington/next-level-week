const express = require("express");
const server = express();

server.use(express.static("public"));


const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// /* Routes */ 
// Ex.:
// server.get("/", (req, res) => {
// 	res.send("Olá")
// })
server.get("/", (req, res) => {
    return res.render("index.html");
})

server.get("/create-point.whtml", (req, res) => {
    return res.render("create-point.html");
})

server.get("/search", (req, res) => {
    return res.render("search-results.html");
})

// run server
//  package.json 
//
// "scripts": {
//     "start": "node src/server.js"
// },
server.listen(3000);