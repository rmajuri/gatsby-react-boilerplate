import Sequelize from 'sequelize';
import db from '../db';

const Request = db.define('request', {
    date: {
        type: Sequelize.STRING,
    },
    name: {
        type: Sequelize.STRING,
    },
    make: {
        type: Sequelize.STRING,
    },
    model: {
        type: Sequelize.STRING,
    },
    year: {
        type: Sequelize.STRING,
    },
    telephone: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    lastContact: {
        type: Sequelize.STRING,
    },
    remarks: {
        type: Sequelize.TEXT,
    },
});

export default Request;
