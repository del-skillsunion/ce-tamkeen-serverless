import os
import json
import boto3

sqs = boto3.client('sqs')

def handler(event, context):
    message = json.dumps({ 'text': 'Hello from API Gateway s' })

    sqs.send_message(
        QueueUrl=os.environ['QUEUE_URL'],
        MessageBody=message
    )

    return {
        'statusCode': 200,
        'body': 'Message sent to SQS'
    }
