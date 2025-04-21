const sqlite3 = require('sqlite3').verbose();
const path = require('path');
require('dotenv').config();

const dbPath = path.resolve(process.env.DB_FILE);
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('DB Connection Error:', err);
  else console.log('Connected to SQLite at', dbPath);
});

// Create FORM_TABLE
db.run(`
  CREATE TABLE IF NOT EXISTS FORM_TABLE (
    FormID INTEGER PRIMARY KEY AUTOINCREMENT,
    PatientID INTEGER NOT NULL,
    "Input 2" TEXT,
    "Input 3" TEXT
  );
`);

// Create PATIENT_TABLE
db.run(`
  CREATE TABLE IF NOT EXISTS PATIENT_TABLE (
    PatientID INTEGER PRIMARY KEY AUTOINCREMENT,
    FirstName TEXT NOT NULL,
    LastName TEXT NOT NULL,
    Age INTEGER NOT NULL
  );
`);

module.exports = db;