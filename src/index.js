const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnector = require('./config/db.config');
const errorHandler = require('./utils/errorHandler');
const apiRouter = require('./routes');
const { PORT } = require('./config/server.config');
const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/api', apiRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`Server started at PORT: ${PORT}`);
    await dbConnector.connect();
    console.log("Successfully connected to db");
}); 