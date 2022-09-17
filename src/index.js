import 'dotenv/config';
import express from 'express';
import sequelize from './config/database.js';
import userRouter from './routes/userRoutes.js';

const app = express();
app.use(express.json());

app.use('/', userRouter)

app.listen(process.env.PORT, async () => {
   console.log(`Server started on port ${process.env.PORT}`);
   await sequelize.sync();
});