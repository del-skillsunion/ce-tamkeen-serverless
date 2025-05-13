const AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
  for (const record of event.Records) {
    const body = JSON.parse(record.body);

    await sns.publish({
      TopicArn: process.env.SNS_TOPIC_ARN,
      Subject: 'Notification from Consumer',
      Message: `Received message: ${body.message}`
    }).promise();
  }

  return { status: 'success' };
};
