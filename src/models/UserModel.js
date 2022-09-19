import db from '../config/database.js';
import { DataTypes } from 'sequelize';

const UserModel = db.define('User', {
   id:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false
   }
});

export default UserModel;