import express from 'express';
import morgan from 'morgan'
import cors from 'cors'

import noteRoutes from './routes/notes.routes'
import authRoutes from './routes/auth.routes'
import roleRoutes from './routes/roles.routes'
import institucionRoutes from './routes/institucion.routes'

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(noteRoutes);
app.use(authRoutes);
app.use(roleRoutes);
app.use(institucionRoutes);

export default app;