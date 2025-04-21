const express = require('express');
const db = require('./db');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Register patient endpoint
app.post('/register-patient', (req, res) => {
  const { firstName, lastName, age } = req.body;
  const stmt = db.prepare(
    'INSERT INTO PATIENT_TABLE (FirstName, LastName, Age) VALUES (?, ?, ?)'
  );
  stmt.run(firstName, lastName, age, function(err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Patient registration failed' });
    } else {
      res.status(201).json({ patientID: this.lastID });
    }
  });
  stmt.finalize();
});

// Submit form endpoint
app.post('/submit-form', (req, res) => {
  const { patientID, input2, input3 } = req.body;
  const stmt = db.prepare(
    'INSERT INTO FORM_TABLE (PatientID, "Input 2", "Input 3") VALUES (?, ?, ?)'
  );
  stmt.run(patientID, input2, input3, function(err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Form submission failed' });
    } else {
      res.status(201).json({ formID: this.lastID });
    }
  });
  stmt.finalize();
});

app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`));