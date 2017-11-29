const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000; //environment variable. Heroku (CI) would do that.
app.listen(PORT);
