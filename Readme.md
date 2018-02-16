# Code Samples for Object Detection Project

Images and annotations taken from - https://github.com/bourdakos1/Custom-Object-Detection

Images consists of frames taken from a clip from Star Wars: The Force Awakens.
[![Watch the video](https://github.com/bourdakos1/Custom-Object-Detection/raw/master/screenshots/starwars_small.gif)](https://www.youtube.com/watch?v=xW2hpkoaIiM)

Annotations are present for each frame and have the same name as the image name. You can find the example to train a model in golang and node, by updating the api-key and model id in corresponding file. There is also a pre-processed json annotations folder that are ready payload for nanonets api, the script used is node/xml-to-json.js .

Each Code Sample Consists of four different files (folders & file in case of golang)

### Step -1 -> Creating the model

So you just need your api-key for creating a new model. You can update the file named as create-model with the api-key in your desired language. For ex- you would need to edit python/create-model.py with your API Key. Similarly you need to edit go/create-model/create-model.go to use the golang sample.

After running the file you have entered, you would receive the following payload. Make note of the model-id, as you would need it for the later steps.

```
{
  "model_id": "00000000-0000-0000-0000-000000000000",
  "model_type": "localization",
  "state": 0,
  "categories": [
    {
      "name": "category1",
      "count": 0
    },
    {
      "name": "category2",
      "count": 0
    }
  ]
}
```

### Step -2 -> Uploading the training Dataset

Now that you have created the model, you now need to train your model by providing annotated images. Here you can find the sample images in the images folder. Video shown above has been broken into frames and annotation for each frame is stored in the annotations folder for each frame separately in two formats - json and xml. The original annotation dataset is in the xml format, we processed it into json payload using node/xml-to-json.js to make it more convenient to consume.

You can then find corresponding file named as upload-training in the language of your choice. You would need to enter your api-key and the model-id generated in the previous step. You can edit the annotation folder location and image folder path, in case you want to move it around, or use a separate dataset.

### Step -3 -> Training the model.

You need to call the training endpoint to start the training of the model. Just update and call the file named train-model in the language of your choice. You would receive an email once the training is complete and ready to use.

### Step -4 -> Getting Prediction for a new Image

To get the prediction for a new image, you would need to enter the model-id, api-key and the path to the image you want to run prediction for. Once you have done the editing, just run the file to get the prediction.


### Prerequisites for each languages

For running the node sample ->

```
cd node
npm install
```

For running the go sample ->

```
No need to install anything, Golang code doesn't require any external dependencies.
```

For running the Python sample ->
```
pip install requests
```
Note the golang sample uses the comverted json instead of the xml payload for convenience purposes, hence it has no dependencies.
