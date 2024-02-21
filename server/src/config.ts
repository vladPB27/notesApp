import env from 'dotenv'
env.config();
// console.log(process.env.HELLO);

export default {
    MONGO_DATABASE:'notesdb',
    MONGO_HOST:'localhost',
    // MONGO_URL: process.env.MONGO_URL,
    SECRET: 'api-notes',
    //conexion con Mysql
    // host:process.env.HOST,
    host:'localhost',
    // database: process.env.DATABASE,
    database: 'pruebadb',
    // user: process.env.USER,
    user: 'root',
    password: ""
}
