"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var typeorm_1 = require("typeorm");
var connection = typeorm_1.createConnection({
    type: 'postgres',
    host: 'db-postgresql-sfo2-72055-do-user-7614759-0.a.db.ondigitalocean.com',
    port: 25060,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'ccr',
    ssl: {
        ca: process.env.DB_CERT,
    },
    entities: ['./src/modules/User/UserModel.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    cli: {
        migrationsDir: './src/database/migrations',
    },
});
connection.then(function (processedConnection) {
    processedConnection.runMigrations();
    console.log('Hey!');
});
