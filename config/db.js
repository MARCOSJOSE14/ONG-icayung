import { createPool } from 'mysql2/promise'

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'icayoung',
  port: 3306
})

export { pool }
