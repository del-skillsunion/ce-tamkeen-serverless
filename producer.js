const AWS = require('aws-sdk');
const sqs = new AWS.SQS();

exports.handler = async (event) => {
  const message = JSON.stringify({ text: 'Hello from API Gateway s' });

  await sqs.sendMessage({
    QueueUrl: process.env.QUEUE_URL,
    MessageBody: message
  }).promise();

  return { statusCode: 200, body: 'Message sent to SQS' };
};
