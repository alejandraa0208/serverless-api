const AWS = require('aws-sdk');
const dynamoose = require('dynamoose');

const People = require('../schemas/peopleSchema'); // Import your Dynamoose schema

module.exports.handler = async (event) => {
  const { id } = event.pathParameters;

  try {
    await People.delete({ id }); // You need to implement a delete method in your schema

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Record deleted successfully.' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error deleting the record.' }),
    };
  }
};
