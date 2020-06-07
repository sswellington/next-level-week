const express = require("express");
const nunjucks = require("nunjucks");

const db = require("./database/db.js")

const server = express();

// set path
server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));

// template engine
nunjucks.configure("src/views", {
    express: server,
    noCache: true // just for development
});

// Routes
// /* Do: transform into class - Routes */
server.get("/", (req, res) => {
    return res.render("index.html");
});

server.get("/create-point.whtml", (req, res) => {
    return res.render("create-point.html");
});


function error(error, message) {
    if (error) {
        console.log(error);
        return res.send(message);
    }
}

server.post("/savepoint", (req, res) => {
    const insert = (`
    INSERT INTO places (
        image, 
        name, 
        address, 
        address2, 
        state, 
        city, 
        items
    ) VALUES (?,?,?,?,?,?,?); `);

    const values = ([
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]);

    function afterInsertData(err) {
        error(err, "Erro no cadastro!");
        console.log("Cadastrado com sucesso");
        console.log(this);

        return res.render("create-point.html", {
            saved: true
        });
    }
    db.run(insert, values, afterInsertData);
});

server.get("/search", (req, res) => {
    const search = req.query.search;

    if (search == "") {
        return res.render("search-results.html", { total: total = 0 });
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        error(err, "Erro na consulta!");
        console.log("Aqui estão seus registro");
        console.log(rows);

        const total = rows.length;

        // return from consultation
        return res.render("search-results.html", {
            places: rows,
            total: total
        });
    });
});
server.listen(3000);