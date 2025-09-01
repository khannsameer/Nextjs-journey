import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // your db password if have
  database: "contact_form",
});

try {
  const connection = await db.getConnection();
  console.log("DataBase Connected Successfully");
  connection.release(); //important to release back to pool
} catch (error) {
  console.error("DataBase connection Failed:", error);
  process.exit(1); // stop server if db is essential
}
