# Serverless API

Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services.

## Routing: API Gateway

This project utilizes AWS API Gateway for routing incoming HTTP requests to Lambda functions.

It defines the following routes for the API:

Create a person: (POST /person) - Create a new person.

Update person info: (PUT /person/{id}) - Update an existing person by ID.

Get person: (GET /person) - Retrieve a list of all people.

Delete person: (DELETE /people/{id}) - Delete a person by ID.

### About the Server

This serverless API project is designed to manage data related to people added to database.

It is built using AWS Lambda functions, AWS DynamoDB for data storage, and AWS API Gateway to handle incoming HTTP requests.

## Server Code

The server code is organized into several AWS Lambda functions, each responsible for specific CRUD operations on people.

The functions are written in Node.js and use the Dynamoose library for interacting with DynamoDB.

## Installation

Clone the repository:

git clone https://github.com/yourusername/serverless-api.git

cd serverless-api

`npm install`

## UML

![UML]()

## Author

Alejandra Altamirano