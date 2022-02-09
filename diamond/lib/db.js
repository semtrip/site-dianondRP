import env from './../dbenv'

import mysql from 'serverless-mysql'

export const db = mysql({
  config: {
    host: env.MYSQL_HOST,
    database: env.MYSQL_DATABASE,
    user: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD,
  },
})

export async function sql_query(query_string,values = []) {
  try {
    const results = await db.query(query_string, values)
    await db.end()
    return results
  } catch (e) {
    throw Error(e.message)
  }
}