const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PUBLIC_PORT || 3000;
const mongodburi = process.env.MONGODB_URI

//Get request
app.get('/', (req, res) => {
  res.json({ message: 'pong' }); 
});


//connecting mongodb
mongoose.connect(mongodburi)

// Defining a route to check the mongoDB connection satus
app.get('/mongoDBConnection', (req, res) => {
  if(mongoose.connection.readyState === 1){
    res.status(200).json('MongoDB connection is successfull')
  }else{
    res.status(400).json('error connection in MongoDB')
  }
});


if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;