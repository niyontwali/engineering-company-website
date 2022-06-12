const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const schema = require('./schemas/users');
const connectDB = require('../config/db');


dotenv.config();

const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});



