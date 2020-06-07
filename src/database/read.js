// import sqlite3
const sqlite3 = require("sqlite3").verbose();
// create database
const db = new sqlite3.Database("./src/database/database.db");
// handling the database
// CRUD - Create; Read, Update, Delete
db.serialize(() => {
    const querySelectAll = (`SELECT * FROM places`);
    db.all(querySelectAll, function(err, rows) {
        if (err) {
            return console.log(err);
        }
        console.log("Aqui estão os registros: ");
        console.log(rows);
    });
});