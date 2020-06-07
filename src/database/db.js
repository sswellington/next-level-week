/* 
Handling the database 
    CRUD - Create; Read, Update, Delete */

// Do: transform into class

// import sqlite3
const sqlite3 = require("sqlite3").verbose();
// create database
const db = new sqlite3.Database("./src/database/database.db");

/* FUNCTIONS */
function error(error) {
    if (error) {
        return console.log(error);
    }
}

function crudCreate() {
    db.serialize(() => {
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
    });
}

function crudRead() {
    db.serialize(() => {
        const querySelectAll = (`SELECT * FROM places`);
        db.all(querySelectAll, function(err, rows) {
            error(err);
            // console.log("Aqui estão os registros: ");
            console.log(rows);
        });
    });
}

function crudUpdate(value) {
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

        function afterInsertData(err) {
            error(err);
            console.log("Cadastro com sucesso");
            console.log(this);
        }

        /* MAIN */
        db.run(insert, value, afterInsertData);
    });
}

function crudDelete(index) {
    db.serialize(() => {
        db.run(`DELETE FROM places WHERE id = ?`, [index], function(err) {
            error(err);
            console.log("Registro deletado com sucesso");
        });
    });
}

/* MAIN - begin */

/* values - begin */

// const colectoria = ([
//     "./assets/unsplash/green.jpg",
//     "Colectoria",
//     "Guilherme Gemballa, Jardim América",
//     "Número 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas"
// ]);

// const paperside = ([
//     "./assets/unsplash/dog-and-paper.jpg",
//     "Paperside",
//     "Guilherme Gemballa, Jardim América",
//     "Número 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas"
// ]);

/* values - end */

// crudCreate();
// crudRead();
// crudUpdate(colectoria);
// crudUpdate(paperside);
// crudRead();
// crudDelete(1);

/* MAIN - end  */

module.exports = db;