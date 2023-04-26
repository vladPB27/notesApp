// import express, { Request, Response } from 'express';
import { config } from 'dotenv'
import app from './app'
import './database'

config()
const PORT = 5000;

app.listen(PORT);
console.log('server running');
