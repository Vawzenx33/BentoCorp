import json

def lambda_handler(event, context):
    body = json.loads(event['body'])
    firstName = body['firstName']
    lastName = body['lastName']
    email = body['email']
    
    # Do something with the data, perhaps save it to DynamoDB
    
    return {
        'statusCode': 200,
        'body': json.dumps('Data received')
    }
