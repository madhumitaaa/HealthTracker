const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const entriesRoute = require('./routes/entries');
const authRoute = require('./routes/auth');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

app.use('/entries', entriesRoute);
app.use('/', authRoute); 

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error('MongoDB connection error:', err));
