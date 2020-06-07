// import sqlite3
const sqlite3 = require("sqlite3").verbose();

// create database
const db = new sqlite3.Database("./src/database/database.db");

// handling the database - DDL
// CRUD - Create; Read, Update, Delete
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

    /* VALUES */

    const value = ([
        "./assets/unsplash/green.jpg",
        "Colectoria",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]);

    const querySelectAll = (`SELECT * FROM places`);

    // template 
    // create table - Create
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT 
        );
    `);

    function ifError(err) {
        if (err) {
            return console.log(err);
        }
    }

    function afterInsertData(err) {
        ifError(err);

        console.log("Cadastro com sucesso");
        console.log(this);
    }

    // // insert table - Update
    // db.run(insert, values, afterInsertData);

    // // query - Read
    // db.all(querySelectAll, function(err, rows) {
    //     ifError(err);

    //     console.log("Aqui estão os registros: ");
    //     console.log(rows);
    // });

    // // drop table - Delete
    // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
    //     ifError(err)
    //     console.log("Registro deletado com sucesso");

    // });
})