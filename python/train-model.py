import requests

model_id = 'Enter-your-model-id'
api_key = 'Enter-your-api-key'

url = 'https://app.nanonets.com/api/v2/ObjectDetection/Model/' + model_id + '/Train/'

headers = {'authorization': 'Basic ' + api_key }

querystring = {'modelId': 'REPLACE_MODEL_ID'}

response = requests.request('POST', url, headers=headers, auth=requests.auth.HTTPBasicAuth('REPLACE_API_KEY', ''), params=querystring)

print(response.text)