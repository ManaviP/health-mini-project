const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(
  session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
  })
);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/authDB');

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/home', (req, res) => {
  if (req.session.userId) {
    res.sendFile(path.join(__dirname, 'home.html'));
  } else {
    res.redirect('/');
  }
});

// Register
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.redirect('/'); // Redirect to login page after registration
  } catch (error) {
    res.status(500).send('Error during registration.');
  }
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.userId = user._id;
      res.redirect('/home'); // Redirect to home.html after login
    } else {
      res.status(400).send('Invalid email or password.');
    }
  } catch (error) {
    res.status(500).send('Error during login.');
  }
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
