import requests

model_id = 'Enter-your-model-id'
api_key = 'Enter-your-api-key'
image_path = 'path/to/your/image'

url = 'https://app.nanonets.com/api/v2/ObjectDetection/Model/' + model_id + '/LabelFile/'

data = {'file': open(image_path, 'rb'),    'modelId': ('', model_id)}

response = requests.post(url, auth=requests.auth.HTTPBasicAuth(api_key, ''), files=data)

print(response.text)