import mysql from "mysql"

export const db = mysql.createConnection({
  host: 'database-1.cqosz6fd4aaa.us-west-2.rds.amazonaws.com',
  user: 'blu2eh',
  password: 'Bluze020830',
  port: '3306',
  database: 'blu2eh'
})