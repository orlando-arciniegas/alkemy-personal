import Sequelize from 'sequelize';
import db from '../database';

const Post = db.define('Post', {
    
    id: {
      autoIncrement: true, 
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: {
        type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE
    }
  }, {
    tableName: 'Posts',
    timestamps: true
});

export default Post;