const { bd_connect } = require('../config.json')

const mysql = require('serverless')
//import mysql from 'serverless-mysql'

const db = mysql({
  config: {
    host: bd_connect.MYSQL_HOST,
    database: bd_connect.MYSQL_DATABASE,
    user: bd_connect.MYSQL_USERNAME,
    password: bd_connect.MYSQL_PASSWORD,
    port: bd_connect.MYSQL_PORT,
  },
})
 
async function query(q) {
  try {
    const results = await db.query(q)
    console.log(results)
    await db.end()
    return results
  } catch (e) {
    throw Error(e.message)
  }
}

// Create "entries" table if doesn't exist
async function migrate() {
  try {
    await query(`
    CREATE TABLE IF NOT EXISTS entries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at 
        TIMESTAMP 
        NOT NULL 
        DEFAULT CURRENT_TIMESTAMP 
        ON UPDATE CURRENT_TIMESTAMP
    )
    `)
    console.log('migration ran successfully')
  } catch (e) {
    console.error('could not run migration, double check your credentials.')
    process.exit(1)
  }
}

migrate().then(() => process.exit())