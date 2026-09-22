const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bookroutes = require('./routes/bookRoutes');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(cors());
app.use(morgan('combined'));

app.use(express.json());


app.use('/books', bookroutes);





mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('✅ Connected to MongoDB');
})
.catch((err) => {
  console.error('❌ Error connecting to MongoDB:', err);
});





app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});