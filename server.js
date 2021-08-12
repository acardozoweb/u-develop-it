const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '$uperLazy123',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

  // querying the db to test connection
  // mthod runs the query and executes to callback 
  // with any resulting rows that match the query
  db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });

  // CATCHALL ROUTE
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});