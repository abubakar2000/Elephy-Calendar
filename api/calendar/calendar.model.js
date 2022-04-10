const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {

        id: {type: DataTypes.STRING, allowNull: true, primaryKey:true},
        addedBy: {type: DataTypes.STRING, allowNull: true},
        date: {type: DataTypes.STRING, allowNull: true},
        description: {type: DataTypes.STRING, allowNull: true},
        reservedWith: {type: DataTypes.STRING, allowNull: true},
        time: {type: DataTypes.STRING, allowNull: true},
        title: {type: DataTypes.STRING, allowNull: true},
        requesterTelephone: {type: DataTypes.STRING, allowNull: true},
        requesterEmail: {type: DataTypes.STRING, allowNull: true},
        approved: {type: DataTypes.BOOLEAN, allowNull: true},
    };

    const options = {

    };

    return sequelize.define('slots', attributes, options);
}