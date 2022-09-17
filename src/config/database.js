import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize('fav-devgo-db', process.env.DB_USER, process.env.DB_PASSWORD, {
   dialect:'sqlite',
   storage: './src/db.sqlite'
});

export default sequelize;