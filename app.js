const express = require('express');
const app = express();
const port = 3000;

const logger = (req, res, next) => {
    console.log(`Request activated: ${req.method} ${req.url}`);
    next();
};

app.use(logger);
app.use(express.json());

app.get('/users/:id', (req, res) => {
    res.send('User list');
});

app.get('/users/:id/:name', (req, res) => {
    res.send(`User ID: ${req.params.id}, Name: ${req.params.name}`);
});

app.post('/users', (req, res) => {
    const {name, age} = req.body;
    res.send(`User created: Name - ${name}, Age - ${age}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

