'use strict';

module.exports = (sequelize, DataTypes) => {
    const book = sequelize.define('book', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isbn: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true
        },
        release_year: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
    }, {});

    book.associate = (models) => {
        // associations can be defined here
        book.belongsTo(models.author, {
            foreignKey: 'author_id',
            onDelete: 'CASCADE'
        })
    };

    return book;
};
