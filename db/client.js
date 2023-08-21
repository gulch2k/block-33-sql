const { Client } = require('pg');

const client = new Client({
user:'JAMAAL',
host:'localhost',
database: 'fitness-dev',
password: '123',
port: 5432,

});

module.exports = client;