const express = require('express');
const path = require('path');

const app = express();

// ✅ Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Default route → open login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});