import requests

url = "https://app.nanonets.com/api/v2/ObjectDetection/Model/"

payload = "{\"categories\" : [\"TieFighter\", \"MillenniumFalcon\"]}"
headers = {
    'Content-Type': "application/json",
    }

response = requests.request("POST", url, headers=headers, auth=requests.auth.HTTPBasicAuth('REPLACE_API_KEY', ''), data=payload)

print(response.text)