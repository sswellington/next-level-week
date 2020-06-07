// import sqlite3
const sqlite3 = require("sqlite3").verbose();
// create database
const db = new sqlite3.Database("./src/database/database.db");
// handling the database
db.serialize(() => {
    const insert = (`
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        )   VALUES (?,?,?,?,?,?,?);
    `);

    const value = ([
        "./assets/unsplash/dog-and-paper.jpg",
        "Paperside",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]);

    function afterInsertData(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Cadastro com sucesso");
        console.log(this);
    }

    /* MAIN */
    db.run(insert, value, afterInsertData);
});