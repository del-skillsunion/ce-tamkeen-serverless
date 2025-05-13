import os
import json
import boto3

sns = boto3.client('sns')

def handler(event, context):
    for record in event['Records']:
        body = json.loads(record['body'])

        sns.publish(
            TopicArn=os.environ['SNS_TOPIC_ARN'],
            Subject='Notification from Consumer',
            Message=f"Received message: {body['message']}"
        )

    return { 'status': 'success' }
