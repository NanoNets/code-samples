const request = require('request');
const api ='Enter-your-api-key'
const modelId = '';

const data = JSON.stringify({
  "categories": [
    "TieFighter",
    "MillenniumFalcon"
  ]
});


const resp = request.post({
    url: `https://app.nanonets.com/api/v2/ObjectDetection/${modelId}/Train/`,
    data,
    auth: {
        username: api,
        password: ''
    }
}, (err, body) => {
    callback(err, body)
});