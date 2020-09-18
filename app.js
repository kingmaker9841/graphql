const express = require('express');
const app = express();
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

//Allow Cross Origin *
app.use(cors());

mongoose.connect(process.env.MONGO_URI,
    {useNewUrlParser: true, useUnifiedTopology: true} 
    ,(err)=>{
    if (err) return console.log(err);
    console.log("Mongoose.connected...");
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})