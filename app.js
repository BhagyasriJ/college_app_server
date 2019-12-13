const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Database connected');

}).catch(err => {
    console.error(err.message);
})

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});

require('./src/routes/main.route')(app);