const { text } = require("express");
const Database = require("./config")


const initDb = {

    //async e await precisam estar sempre juntoss
    async init() {
        // o Await serve como uma espera para que o database leia a informação 
        //e so assim passar para a proxima linha.
        const db = await Database()

        await db.exec(`

       CREATE TABLE rooms (
           id INTEGER  PRIMARY KEY,
          pass TEXT 
       )`);

         await db.exec(`
        CREATE TABLE questions(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT      
            )
        `);

        await db.close()
    }
}

initDb.init();



