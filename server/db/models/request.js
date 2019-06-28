const Sequelize = require('sequelize');
const db = require('../db');

const Request = db.define('request', {
    date: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    make: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    model: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    year: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    telephone: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    lastContact: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});

module.exports = Request;
