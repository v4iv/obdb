module.exports = {
    "development": {
        "username": "vaibhav",
        "password":"a1b2c3$2011",
        "database": "book_database_development",
        "host": "127.0.0.1",
        "dialect": "postgres",
        "operatorsAliases": false
    },
    "test": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOSTNAME,
        "port": process.env.DB_PORT,
        "dialect": "postgres",
        "operatorsAliases": false
    },
    "production": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOSTNAME,
        "port": process.env.DB_PORT,
        "dialect": "postgres",
        "operatorsAliases": false
    }
}
