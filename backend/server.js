const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db.config');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`\`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
