import requests

url = "https://app.nanonets.com/api/v2/ObjectDetection/Model/"
api_key = "Enter your API Key"

payload = "{\"categories\" : [\"TieFighter\", \"MillenniumFalcon\"]}"
headers = {
    'Content-Type': "application/json",
    }

response = requests.request("POST", url, headers=headers, auth=requests.auth.HTTPBasicAuth(api_key, ''), data=payload)

print(response.text)