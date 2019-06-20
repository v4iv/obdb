'use strict';
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('author', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },
    name: DataTypes.STRING
  }, {});
  author.associate = function(models) {
    // associations can be defined here
    author.hasMany(models.book, {
      foreignKey: 'author_id',
      as: 'writtenBooks'
    })
  };
  return author;
};
