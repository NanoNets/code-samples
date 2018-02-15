pathToAnnotations = '/Users/bhanu/nanonets/code/annotations/json'
pathToImages = '/Users/bhanu/nanonets/code/images'
model_id = "Enter-your-model-id"
api_key = "Enter-your-api-key"

import os, requests
for root, dirs, files in os.walk(pathToAnnotations, topdown=False):
    for name in files:
        print("Trying ", os.path.join(root, name))
        annotation = open(os.path.join(root, name), "r")
        filePath = os.path.join(root, name)
        imageName, ext = name.split(".")
        imagePath = os.path.join(pathToImages, imageName + '.jpg')
        jsonData = annotation.read()
        url = 'https://app.nanonet.com/api/v2/ObjectDetection/Model/' + model_id + '/UploadFile/'

        data = {'file' :open(imagePath, 'rb'),  'data' :('', '[{"filename":"' + name + '", "object": '+ jsonData+'}]'),   'modelId' :('', model_id)}

        response = requests.post(url, auth=requests.auth.HTTPBasicAuth(api_key, ''), files=data)

        print(response.text)