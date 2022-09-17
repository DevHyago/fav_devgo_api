import 'dotenv/config';
import express from 'express';
import sequelize from './config/database.js';

const app = express();

app.get('/', (req, res) => {
   return res.json({message: 'Hello Word'});
});

app.listen(process.env.PORT, async () => {
   console.log(`Server started on port ${process.env.PORT}`);

   await sequelize.sync();
});