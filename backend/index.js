const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

const { addRental, getRentals, deleteRentalById } = require('./controllers/rentals.controller');

app.use(express.json());
app.use(cors({
    'allowedHeaders': ['Content-Type'],
    'origin': '*',
    'preflightContinue': true
}));

app.delete('/rentals/:id', (req, res) => {
    deleteRentalById(req.params.id);
    res.status(204);
    res.end();
});

app.post('/rentals', (req, res) => {
    addRental(req.body);
    res.status(201);
    res.end();
});

app.get('/rentals', (req, res) => {
    const rentals = getRentals(req.query);
    res.json(rentals);
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});