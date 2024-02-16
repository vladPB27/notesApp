import mongoose from 'mongoose';
import config from './config';
import mysql from 'promise-mysql';

// connection with mongodb
/* (async () => {
    try {
        const db =await mongoose.connect(config.MONGO_URL!);
        
        console.log('database connected to:',db.connection.name);
    } catch (error) {
        console.log(error);
    }
})() */

// connection with Mysql
const connection = mysql.createConnection({
    host: config.host,
    database:config.database,
    user:"root",
    password:config.password
})

export const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
}