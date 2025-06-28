const express = require('express');
const router = express.Router();
const pool = require('../main');

router.post('/', async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const newUser = await db.query(
      'INSERT INTO users (fullname, email, password) VALUES ($1, $2, $3) RETURNING *',
      [fullName, email, password]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;