const express = require('express');
const app = express(); // could have multiple express applications running within node application

app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});

const PORT = process.evn.PORT || 5000; //environment variable. Heroku (CI) would do that.

app.listen(PORT);

//4 steps for hekoku
//1. Dynamic port binding
//2. specify node enviornment i.e. declare engines property it in package.json 
//3. Specify start script i.e. scripts section, add start section
//4. create .gitignore