const express = require('express');
const app = express(); // could have multiple express applications running within node application

app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});

const PORT = process.env.PORT || 5000; //environment variable. Heroku (CI) would do that.

app.listen(PORT);