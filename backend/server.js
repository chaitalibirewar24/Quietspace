const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const authRoute = require('./routes/auth'); // ✅ NEW
app.use('/api/auth', authRoute); // ✅ NEW

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
