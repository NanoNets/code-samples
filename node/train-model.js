const request = require('request');
const api ='Enter-your-api-key'
const modelId = '';


const resp = request.post({
    url: `https://app.nanonets.com/api/v2/ObjectDetection/${modelId}/Train/`,
    auth: {
        username: api,
        password: ''
    }
}, (err, body) => {
    callback(err, body)
});