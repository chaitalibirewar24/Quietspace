const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const pool = require('../db');

// Sign Up
router.post('/signup', async (req, res) => {
    const { email, password, phone } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO users (email, password, phone) VALUES ($1, $2, $3) RETURNING id',
            [email, hashedPassword, phone]
        );

        res.status(201).json({ message: 'Signup successful', userId: result.rows[0].id });
    }
    catch (err) {
        console.error("Signup Error:", err); // 👈 This will show the actual cause
        if (err.code === '23505') {
            res.status(400).json({ error: 'Email already exists' });
        } else {
            res.status(500).json({ error: 'Server error during signup' });
        }
    }

});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userRes = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userRes.rows.length === 0) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, userRes.rows[0].password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        res.json({ message: 'Login successful', userId: userRes.rows[0].id });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
