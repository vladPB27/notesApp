import env from 'dotenv'
env.config();
console.log(process.env.HELLO);

export default {
    MONGO_DATABASE:'notesdb',
    MONGO_HOST:'localhost',
    MONGO_URL: process.env.MONGO_URL
}