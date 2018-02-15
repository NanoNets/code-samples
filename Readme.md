# Code Samples for Object Detection Project

Images and annotations taken from - https://github.com/bourdakos1/Custom-Object-Detection

Images consists of frames taken from a clip from Star Wars: The Force Awakens.
[![Watch the video](https://github.com/bourdakos1/Custom-Object-Detection/raw/master/screenshots/starwars_small.gif)](https://www.youtube.com/watch?v=xW2hpkoaIiM)

Annotations are present for each frame and have the same name as the image name. You can find the example to train a model in golang and node, by updating the api-key and model id in corresponding file. There is also a pre-processed json annotations folder that are ready payload for nanonets api, the script used is node/xml-to-json.js .

For running the node sample ->

```
cd node
npm install
// Update sample.js with your model-id
node upload.js
// Can call the train endpoint using the API, or use the web-interface for the same.
```

For running the go sample ->

```
go run go/main.go
```
Note the golang sample uses the comverted json instead of the xml payload for convenience purposes, hence has no dependencies at all.
