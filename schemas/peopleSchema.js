const dynamoose = require('dynamoose');

// Define the schema for your 'People' table
const peopleSchema = new dynamoose.Schema({
  id: String,      // Primary Key
  name: String,
  age: Number,
});

// Create the 'People' model
const People = dynamoose.model('People', peopleSchema);

module.exports = People;
