const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Schema (the structure of the data)
const mydataSchema = new Schema({
  userName: String,
});

// Create a model based on the schema
const Mydata = mongoose.model('Mydata', mydataSchema);

module.exports = Mydata;
