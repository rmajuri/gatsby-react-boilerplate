import Sequelize from 'sequelize';
import pkg from '../../package.json';

const databasename = pkg.name;

const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${databasename}`, {
    logging: false,
});

export default db;
