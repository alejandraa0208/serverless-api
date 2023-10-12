const AWS = require('aws-sdk');
const dynamoose = require('dynamoose');

const People = require('../schemas/peopleSchema'); // Import your Dynamoose schema

module.exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  
  try {
    const newItem = new People(body);
    const savedItem = await newItem.save();

    return {
      statusCode: 201,
      body: JSON.stringify(savedItem),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error creating the record.' }),
    };
  }
};
