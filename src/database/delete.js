// import sqlite3
const sqlite3 = require("sqlite3").verbose();
// create database
const db = new sqlite3.Database("./src/database/database.db");
db.serialize(() => {
    const index = 1;
    db.run(`DELETE FROM places WHERE id = ?`, [index], function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Registro deletado com sucesso");
    });
});