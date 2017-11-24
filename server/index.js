const express = require('express');
const app = express();



const PORT = process.env.PORT || 5000; //environment variable. Heroku (CI) would do that.

app.listen(PORT);