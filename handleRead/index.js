const AWS = require('aws-sdk');
const dynamoose = require('dynamoose');

const People = require('../schemas/peopleSchema'); // Import your Dynamoose schema

module.exports.handler = async (event) => {
  try {
    const records = await People.scan().exec(); // You need to implement a scan method in your schema

    return {
      statusCode: 200,
      body: JSON.stringify(records),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error reading records.' }),
    };
  }
};
