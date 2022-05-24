const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;


app.get('/', (req,res) => {
    res.send('Hola Mundo');
});

app.listen(port, ()  => {
    console.log(`Server running at port ${port}`);
});