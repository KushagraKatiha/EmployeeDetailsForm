const mysql = require('mysql2');

// MySQL connection configuration
async function connectToDB() {
  try {
      const db = mysql.createConnection({
          host: process.env.HOST,  // Change as needed
          user: process.env.PERSON,       // Change as needed
          password: process.env.PASSWORD,       // Change as needed
          database: process.env.DATABASE    // Change as needed
        });
        
        // Connect to MySQL
        await db.promise().connect();
        return db
  } catch (error) {
    console.error("Error Encountered: ", error)
  }

}

module.exports = connectToDB