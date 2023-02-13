import mysql from "promise-mysql";
import { varEnv } from "../config";

const connection = mysql.createConnection({
  host: varEnv.host,
  database: varEnv.database,
  user: varEnv.user,
  password: varEnv.password
})

export const getConnection = () => {
  return connection;
}