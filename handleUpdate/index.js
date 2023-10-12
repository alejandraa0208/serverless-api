const AWS = require('aws-sdk');
const dynamoose = require('dynamoose');

const People = require('../schemas/peopleSchema'); // Import your Dynamoose schema

module.exports.handler = async (event) => {
  const { id } = event.pathParameters;
  const body = JSON.parse(event.body);

  try {
    const updatedItem = await People.update({ id }, body); // You need to implement an update method in your schema

    return {
      statusCode: 200,
      body: JSON.stringify(updatedItem),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error updating the record.' }),
    };
  }
};
