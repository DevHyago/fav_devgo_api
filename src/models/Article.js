import db from '../config/database';
import { DataTypes } from 'sequelize';

const ArticleModel = db.define('Article', {
   id:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
   },
   title: {
      type: DataTypes.STRING,
      allowNull: false
   },
   article: {
      type: DataTypes.STRING,
      allowNull: false
   },
   user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
         model: 'users',
         key: 'id'
      }
   }
});

export default ArticleModel;