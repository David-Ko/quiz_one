// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'cluckrs'
    },
  
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    },
    
    seeds: {
      directory: './db/seeds'
    }
  }

};
